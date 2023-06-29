import { Text as _Text } from "@components/text/Text";
import { useEffect, useState } from "react";
import { resolveRandom } from "../../../resolveRandom";

export const useImages = () => {
  const [images, setImages] = useState<any[]>([]);
  useEffect(() => {
    const init = async () => {
      const randoms = await resolveRandom();
      setImages(randoms);
    };
    init();
  }, []);

  return images;
};
