const WakaTime = () => {
  return (
    <div className="text-center">
      <a
        href="https://wakatime.com/@6be975b7-7258-4475-bc73-9c0fc554430e"
        target="_blank"
        rel="noopener"
        className="inline-block"
      >
        <img
          src="https://wakatime.com/badge/user/6be975b7-7258-4475-bc73-9c0fc554430e.svg?style=for-the-badge"
          alt="Total time coded since April 10, 2015"
          className="mx-auto mb-4"
        />
        <img
          src="https://github-readme-stats-guibranco.vercel.app/api/wakatime?username=guistracini&range=all_time&layout=compact&theme=synthwave&bg_color=341b3b&hide_title=true"
          alt="Total time coded since April 10, 2015 by language"
          className="mx-auto"
        />
      </a>
      <p className="text-sm italic mt-4">
        * Coding since 2007, but stats available only from April 10, 2015.
      </p>
    </div>
  );
};

export default WakaTime;
