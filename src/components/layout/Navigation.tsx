export function Navigation(props: NavigationProps) {
  const bannerHeight = useBannerSize();
  const navigate = useNavigate();
  const { loggedIn } = useAuth();

  const handleClick = (path: To) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <>
      {/* lightbar */}
      {!props.noLightbar ? (
        <div
          className="absolute inset-x-0 top-0 flex h-[88px] items-center justify-center"
          style={{
            top: `${bannerHeight}px`,
          }}
        >
          <div className="absolute inset-x-0 -mt-[22%] flex items-center sm:mt-0">
            <Lightbar />
          </div>
        </div>
      ) : null}

      {/* backgrounds - these are separate because of z-index issues */}
      <div
        className="fixed z-[20] pointer-events-none left-0 right-0 top-0 min-h-[150px]"
        style={{
          top: `${bannerHeight}px`,
        }}
      >
        <div
          className={classNames(
            "fixed left-0 right-0 h-20 flex items-center",
            props.doBackground
              ? "bg-background-main border-b border-utils-divider border-opacity-50"
              : null,
          )}
        >
          {props.doBackground ? (
            <div className="absolute w-full bg-gradient-to-b from-background-main to-transparent" />
          ) : null}
        </div>
      </div>

      {/* content */}
      <div
        className="fixed pointer-events-none left-0 right-0 z-[60] top-0 min-h-[150px]"
        style={{
          top: `${bannerHeight}px`,
        }}
      >
        <div className={classNames("fixed left-0 right-0 flex items-center")}>
          <div className="px-7 py-5 relative z-[60] flex flex-1 items-center justify-between">
            <div className="flex items-center space-x-1.5 ssm:space-x-3 pointer-events-auto">
              <Link
                className="block tabbable rounded-full text-xs ssm:text-base"
                to="/"
                onClick={() => window.scrollTo(0, 0)}
              >
                <BrandPill clickable header />
              </Link>
            </div>
            <div className="relative pointer-events-auto">
              <LinksDropdown>
                {loggedIn ? <UserAvatar withName /> : <NoUserAvatar />}
              </LinksDropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
