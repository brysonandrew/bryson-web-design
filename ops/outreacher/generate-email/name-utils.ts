/**
 * Name-related utilities for email generation
 */

/**
 * Safely formats a name for use in email greetings
 * @param name - The name to format
 * @param fallback - Fallback value if name is empty
 * @returns Formatted name or fallback
 */
export const formatName = (name: string | undefined | null, fallback = 'there'): string => {
  if (!name || name.trim().length === 0) {
    return fallback;
  }
  return name.trim();
};

/**
 * Extracts a likely first name from a full name or team name
 * @param name - Full name or team name
 * @returns First name or original name if extraction fails
 */
export const extractFirstName = (name: string): string => {
  const trimmed = name.trim();
  
  // If it's a team-style name, return as-is
  if (trimmed.toLowerCase().includes('team') || trimmed.toLowerCase().includes('studio')) {
    return trimmed;
  }
  
  // Try to extract first name
  const parts = trimmed.split(/\s+/);
  if (parts.length > 0) {
    return parts[0];
  }
  
  return trimmed;
};

