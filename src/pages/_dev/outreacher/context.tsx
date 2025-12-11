import type { FC, ReactNode } from 'react';
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import type {
  TGenerateEmailResponse,
  TToastState,
  TToastType,
} from './types';
import type { TBusiness } from './business-search-panel';
import type { TSearchTown } from './timezone-timeline/types';
import { createCopy } from './copy-helpers';
import { generateEmail } from './generate-email';
import { createKeyboardShortcutHandler } from './keyboard-shortcuts';

type TGenerateButtonProps = {
  handleGenerate: () => void;
  isLoading: boolean;
  disabled?: boolean;
};

type TTownSearchResults = {
  towns: TSearchTown[];
  isLoading: boolean;
  statusMessage: string | null;
};

type TBusinessSearchResults = {
  businesses: TBusiness[];
  isLoading: boolean;
  statusMessage: string | null;
};

type TOutreacherContextValue = {
  // URL Form state
  url: string;
  setUrl: (url: string) => void;
  loading: boolean;
  error: string | null;
  result: TGenerateEmailResponse | null;
  handleSubmit: (e: React.FormEvent) => Promise<void>;

  // Email preview state
  emailPreviewSubject: string;
  emailPreviewBody: string;
  setEmailPreviewSubject: (value: string) => void;
  setEmailPreviewBody: (value: string) => void;
  primaryEmail: string;
  mailtoHref: string;

  // Toast state
  toast: TToastState;
  showToast: (message: string, type?: TToastType, via?: string) => void;

  // Copy function
  copy: ReturnType<typeof createCopy>;

  // Business finder state
  businessFinderLocation: string;
  setBusinessFinderLocation: (location: string) => void;
  businessIndustry: string;
  setBusinessIndustry: (industry: string) => void;
  businessLocation: string;
  setBusinessLocation: (location: string) => void;
  businessGenerateButtonProps: TGenerateButtonProps | null;
  businessSearchResults: TBusinessSearchResults | null;
  businessLastQuerySummary: string | null;
  businessError: string | null;
  handleBusinessSearch: () => Promise<void>;

  // Timezone timeline state
  selectedTimezones: Set<number>;
  setSelectedTimezones: (timezones: Set<number> | ((prev: Set<number>) => Set<number>)) => void;
  timezoneGenerateButtonProps: TGenerateButtonProps | null;
  townSearchResults: TTownSearchResults | null;
  setTownSearchResults: (results: TTownSearchResults | null) => void;
  setTimezoneGenerateButtonProps: (props: TGenerateButtonProps | null) => void;
};

const OutreacherContext = createContext<
  TOutreacherContextValue | undefined
>(undefined);

export const useOutreacher = () => {
  const context = useContext(OutreacherContext);
  if (!context) {
    throw new Error('useOutreacher must be used within OutreacherProvider');
  }
  return context;
};

type TOutreacherProviderProps = {
  children: ReactNode;
};

export const OutreacherProvider: FC<TOutreacherProviderProps> = ({
  children,
}) => {
  // URL Form state
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] =
    useState<TGenerateEmailResponse | null>(null);

  // Email preview state
  const [emailPreviewSubject, setEmailPreviewSubject] =
    useState<string>('');
  const [emailPreviewBody, setEmailPreviewBody] = useState<string>('');

  // Toast state
  const [toast, setToast] = useState<TToastState>(null);

  // Business finder state
  const [businessFinderLocation, setBusinessFinderLocation] =
    useState<string>('Stockholm, Sweden');
  const [businessIndustry, setBusinessIndustry] = useState<string>(
    'web developer',
  );
  const [businessLocation, setBusinessLocation] = useState<string>(
    'Stockholm, Sweden',
  );
  const [businessGenerateButtonProps, setBusinessGenerateButtonProps] =
    useState<TGenerateButtonProps | null>(null);
  const [businessSearchResults, setBusinessSearchResults] =
    useState<TBusinessSearchResults | null>(null);
  const [businessLastQuerySummary, setBusinessLastQuerySummary] =
    useState<string | null>(null);
  const [businessError, setBusinessError] = useState<string | null>(
    null);
  const [businessLoading, setBusinessLoading] = useState(false);

  // Timezone timeline state
  const [selectedTimezones, setSelectedTimezones] = useState<
    Set<number>
  >(new Set());
  const [timezoneGenerateButtonProps, setTimezoneGenerateButtonProps] =
    useState<TGenerateButtonProps | null>(null);
  const [townSearchResults, setTownSearchResultsState] =
    useState<TTownSearchResults | null>(null);
  const [townSearchLoading, setTownSearchLoading] = useState(false);

  const showToast = useCallback(
    (
      message: string,
      type: TToastType = 'info',
      via?: string,
    ) => {
      setToast({ message, type, via });
      setTimeout(() => setToast(null), 1800);
    },
    [],
  );

  const copy = useMemo(() => createCopy(showToast), [showToast]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      setResult(null);

      if (!url) {
        setError('Please enter a website URL.');
        return;
      }

      setLoading(true);

      try {
        const data = await generateEmail(url);
        setResult(data);
      } catch (err: unknown) {
        setError(
          err instanceof Error
            ? err.message
            : 'Something went wrong',
        );
      } finally {
        setLoading(false);
      }
    },
    [url],
  );

  // Sync preview subject/body when a new result arrives
  useEffect(() => {
    if (result) {
      setEmailPreviewSubject(result.subject ?? '');
      setEmailPreviewBody(result.body ?? '');
    } else {
      setEmailPreviewSubject('');
      setEmailPreviewBody('');
    }
  }, [result]);

  // Pick primary email from contactEmails, ignore .webp etc.
  const primaryEmail = useMemo(
    () =>
      result?.contactEmails?.find((value) => value.includes('@')) ??
      '',
    [result],
  );

  const mailtoAddress = primaryEmail || 'hello@agency.com';

  const mailtoHref = useMemo(
    () =>
      mailtoAddress || emailPreviewSubject || emailPreviewBody
        ? `mailto:${encodeURIComponent(
            mailtoAddress,
          )}?subject=${encodeURIComponent(
            emailPreviewSubject || '',
          )}&body=${encodeURIComponent(emailPreviewBody || '')}`
        : '',
    [mailtoAddress, emailPreviewSubject, emailPreviewBody],
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handler = createKeyboardShortcutHandler({
      url,
      result,
      copy,
    });

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [url, result, copy]);

  // Update business location when external location changes
  useEffect(() => {
    if (businessFinderLocation !== businessLocation) {
      setBusinessLocation(businessFinderLocation);
    }
  }, [businessFinderLocation, businessLocation]);

  const handleBusinessSearch = useCallback(async () => {
    setBusinessError(null);

    const trimmedIndustry = businessIndustry.trim();
    const trimmedLocation = businessLocation.trim();

    if (!trimmedIndustry || !trimmedLocation) {
      setBusinessError(
        'Please enter both an industry and a location.',
      );
      setBusinessSearchResults({
        businesses: [],
        isLoading: false,
        statusMessage:
          'Please enter both an industry and a location.',
      });
      return;
    }

    setBusinessLoading(true);
    setBusinessSearchResults({
      businesses: [],
      isLoading: true,
      statusMessage: 'Searching businesses…',
    });

    try {
      const response = await fetch(
        'http://localhost:4000/api/businesses/search',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            businessType: trimmedIndustry,
            location: trimmedLocation,
            limit: 30,
          }),
        },
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${text}`,
        );
      }

      const data = await response.json();
      const results: TBusiness[] = data.businesses ?? [];

      setBusinessLastQuerySummary(
        `${trimmedIndustry} in ${trimmedLocation} (${results.length} found)`,
      );

      setBusinessSearchResults({
        businesses: results,
        isLoading: false,
        statusMessage: null,
      });
    } catch (err: any) {
      console.error('Business search failed:', err);
      const errorMessage =
        err?.message ||
        'Something went wrong while searching for businesses.';
      setBusinessError(errorMessage);

      setBusinessSearchResults({
        businesses: [],
        isLoading: false,
        statusMessage: errorMessage,
      });
    } finally {
      setBusinessLoading(false);
    }
  }, [businessIndustry, businessLocation]);

  // Expose business generate button props
  useEffect(() => {
    const trimmedIndustry = businessIndustry.trim();
    const trimmedLocation = businessLocation.trim();
    const isDisabled = !trimmedIndustry || !trimmedLocation;

    setBusinessGenerateButtonProps({
      handleGenerate: handleBusinessSearch,
      isLoading: businessLoading,
      disabled: isDisabled,
    });
  }, [
    businessIndustry,
    businessLocation,
    handleBusinessSearch,
    businessLoading,
  ]);

  const handleTownSearch = useCallback(async () => {
    // This will be called from TimezoneTimelineSearch component
    // The actual implementation stays in that component
  }, []);

  // Expose setters for town search
  const setTownSearchResults = useCallback(
    (results: TTownSearchResults | null) => {
      setTownSearchResultsState(results);
    },
    [],
  );

  const setTimezoneGenerateButtonPropsContext = useCallback(
    (props: TGenerateButtonProps | null) => {
      setTimezoneGenerateButtonProps(props);
    },
    [],
  );

  const value: TOutreacherContextValue = {
    // URL Form state
    url,
    setUrl,
    loading,
    error,
    result,
    handleSubmit,

    // Email preview state
    emailPreviewSubject,
    emailPreviewBody,
    setEmailPreviewSubject,
    setEmailPreviewBody,
    primaryEmail,
    mailtoHref,

    // Toast state
    toast,
    showToast,

    // Copy function
    copy,

    // Business finder state
    businessFinderLocation,
    setBusinessFinderLocation,
    businessIndustry,
    setBusinessIndustry,
    businessLocation,
    setBusinessLocation,
    businessGenerateButtonProps,
    businessSearchResults,
    businessLastQuerySummary,
    businessError,
    handleBusinessSearch,

    // Timezone timeline state
    selectedTimezones,
    setSelectedTimezones,
    timezoneGenerateButtonProps,
    townSearchResults,
    setTownSearchResults,
    setTimezoneGenerateButtonProps: setTimezoneGenerateButtonPropsContext,
  };

  return (
    <OutreacherContext.Provider value={value}>
      {children}
    </OutreacherContext.Provider>
  );
};
