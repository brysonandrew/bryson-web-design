  // const prevTimestampRef = useRef(0);
  // useEffect(() => {
  // const fetchIp = async () => {
  //   const ip = await fetch(
  //     'https://api.ipify.org?format=json',
  //   );
  //   console.log(ip);
  //   const json = await ip.json();
  //   console.log(json);
  // };
  // fetchIp();
  // const insertEntry = async () => {
  //   try {
  //     const { count, data, error } = await execute({
  //       title,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const timestamp = Date.now();
  // const prevTimestamp = prevTimestampRef.current;
  // const diff = timestamp - prevTimestamp;
  // if (diff > 1000 && !import.meta.env.DEV) {
  //   insertEntry();
  // }
  // }, [title]);