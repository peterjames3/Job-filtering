import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import removeIcon from "../assets/icon-remove.svg";
import useStore from "../Store/screen";

const DataFetching = () => {
  const { data, loading, error, fetchData, screenWidth, setScreenWidth } =
    useStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isClicked, setIsClicked] = useState(false);
  const typeFilter = searchParams.get("role");
  const levelFilter = searchParams.get("level");
  const languagesFilter = searchParams.get("languages");
  const toolsFilter = searchParams.get("tools")
    ? searchParams.get("tools").split(",")
    : [];

  useEffect(() => {
    fetchData();

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setScreenWidth]);

  if (loading) {
    return (
      <div className="w-full h-screen text-4xl text-center font-League font-medium">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full h-screen text-3xl font-League font-medium text-red-600">
        {error}
      </div>
    );
  }

  if (!data) {
    return null; // or some fallback UI
  }

  const displayedRoles = data.filter((job) => {
    const jobRole = job.role.toLowerCase();
    const jobLevel = job.level.toLowerCase();
    const jobLanguages = job.languages.map((language) =>
      language.toLowerCase()
    );
    const jobTools = job.tools.map((tool) => tool.toLowerCase());

    const matchRole = typeFilter ? jobRole === typeFilter.toLowerCase() : true;
    const matchLevel = levelFilter
      ? jobLevel === levelFilter.toLowerCase()
      : true;
    const matchLanguage = languagesFilter
      ? jobLanguages.includes(languagesFilter.toLowerCase())
      : true;
    const matchTool = toolsFilter.length
      ? toolsFilter.every((tool) => jobTools.includes(tool.toLowerCase()))
      : true;

    return matchRole && matchLevel && matchLanguage && matchTool;
  });

  const items = displayedRoles.map(
    ({
      id,
      logo,
      company,
      new: isNew,
      featured,
      position,
      postedAt,
      contract,
      location,
      role,
      level,
      tools,
      languages,
    }) => (
      <div
        key={id}
        className={`${
          featured ? "border-l-[5px] border-DesaturatedDarkCyan" : ""
        } divide-y-4 gap-[5rem] divide-slate-300 sm:space-y-0 sm:flex justify-between sm:divide-y-0 items-center rounded-md sm:gap-10 shadow-md shadow-DarkGrayishCyan py-3 px-6 bg-white`}
      >
        <div className="sm:flex pt-6 sm:pt-0 gap-3 items-center py-2 sm:py-0 relative">
          <div className="sm:size-[7rem] absolute -top-14 sm:relative sm:top-0">
            <img
              src={logo}
              alt=""
              className="sm:relative sm:w-full sm:h-full aspect-ratio"
            />
          </div>
          <div>
            <div className="flex gap-2 items-center space-y-2 py-2">
              <span>
                <h3 className="text-xl font-League font-medextra text-DesaturatedDarkCyan">
                  {company}
                </h3>
              </span>
              <span>
                {isNew && (
                  <h2 className="text-white font-medextra bg-DesaturatedDarkCyan rounded-xl uppercase py-[0.2rem] px-[0.4rem]">
                    new!
                  </h2>
                )}
              </span>
              <span>
                {featured && (
                  <h2 className="text-white font-medextra bg-black rounded-xl uppercase py-[0.2rem] px-[0.4rem]">
                    Featured
                  </h2>
                )}
              </span>
            </div>
            <h4 className="text-2xl font-League font-semibold text-black hover:cursor-pointer hover:text-DesaturatedDarkCyan transition-all delay-300">
              {position}
            </h4>
            <div className="py-2">
              <ul className="flex items-center justify-between text-slate-400">
                <li>{postedAt}</li>
                <li>{contract}</li>
                <li>{location}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-2 sm:py-0">
          <ul className="flex flex-wrap space-y-2 md:space-y-0 space-x-3 justify-between items-center">
            {role && (
              <Link
                onClick={() => setIsClicked(true)}
                to={`?role=${role.toLowerCase()}`}
                className="rounded-sm py-[0.25rem] cursor-pointer px-[0.5rem] font-medextra text-xl text-DesaturatedDarkCyan hover:text-white bg-LightGrayishCyan hover:bg-DesaturatedDarkCyan transition-all delay-300"
              >
                {role}
              </Link>
            )}
            {level && (
              <Link
                onClick={() => setIsClicked(true)}
                to={`?level=${level.toLowerCase()}`}
                className="rounded-sm py-[0.25rem] cursor-pointer px-[0.5rem] font-medextra text-xl text-DesaturatedDarkCyan hover:text-white bg-LightGrayishCyan hover:bg-DesaturatedDarkCyan transition-all delay-300"
              >
                {level}
              </Link>
            )}
            {tools &&
              tools.map((tool, index) => (
                <Link
                  onClick={() => setIsClicked(true)}
                  key={index}
                  to={`?tools=${tool.toLowerCase()}`}
                  className="rounded-sm py-[0.25rem] cursor-pointer px-[0.5rem] font-medextra text-xl text-DesaturatedDarkCyan hover:text-white hover:bg-DesaturatedDarkCyan transition-all delay-300"
                >
                  {tool}
                </Link>
              ))}
            {languages &&
              languages.map((language, index) => (
                <Link
                  onClick={() => setIsClicked(true)}
                  to={`?languages=${language.toLowerCase()}`}
                  key={index}
                  className="rounded-sm py-[0.25rem] cursor-pointer px-[0.5rem] font-medextra text-xl text-DesaturatedDarkCyan hover:text-white hover:bg-DesaturatedDarkCyan transition-all delay-300"
                >
                  {language}
                </Link>
              ))}
          </ul>
        </div>
      </div>
    )
  );

  const stack = displayedRoles.map((stack) => (
    <div key={stack.id} className="w-full bg-white h-auto overflow-hidden">
      <div className="absolute z-50 -top-[3.9rem] w-full py-2 px-3 rounded-md bg-white text-white flex flex-row items-center justify-between">
        <div className="flex flex-wrap gap-4 *:font-medextra *:text-xl *:text-DesaturatedDarkCyan *:bg-LightGrayishCyan *:rounded-[4px] *:overflow-hidden">
          <nav className="flex justify-between">
            <i className="py-[6px] px-4">{stack.role}</i>
            <button
              className="bg-DesaturatedDarkCyan p-2 rounded-r-[4px] hover:bg-black"
              type="button"
            >
              <Link  className="">
                <img src={removeIcon} alt="" />
              </Link>
            </button>
          </nav>
          {
            stack.languages.map((language, index)=>(
              <div
              key={index}>
                
                <nav className="flex justify-between">
            <i className="py-[6px] px-4">{language}</i>
            <button
              className="bg-DesaturatedDarkCyan p-2 rounded-r-[4px] hover:bg-black"
              type="button"
            >
              <Link className="">
                <img src={removeIcon} alt="" />
              </Link>
            </button>
          </nav>
              </div>

            ))
          }
     
        </div>
        <div>
          <Link
            onClick={() => setIsClicked(false)}
            to="."
            className="hover:underline transition-all delay-300 font-medextra text-xl text-DesaturatedDarkCyan"
            type="button"
          >
          clear
          </Link>
        </div>
      </div>
    </div>
  ));
  

  return (
    <section className="relative max-w-[1000px] mt-0 mx-auto py-10">
      {isClicked && stack}

      <div
        className={`flex flex-col space-y-[4rem] sm:space-y-[3rem] ${
          isClicked && screenWidth < 520 ? "mt-[7rem]" : "mt-[4.5rem"
        }`}
      >
        {items}
      </div>
    </section>
  );
};

export default DataFetching;
