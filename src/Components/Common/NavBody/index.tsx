import Link from "next/link";

const NavBody = () => {
  const navigation = [
    {
      label: "Explore",
      url: "/",
      subNav: [
        { label: "X", url: "/" },
        { label: "Project", url: "/" },
        { label: "Life at X", url: "/" },
        { label: "Careers", url: "/" },
        { label: "Moonshot Thinking", url: "/" },
        { label: "Blog", url: "/" },
      ],
    },
    {
      label: "Contact",
      url: "/",
      subNav: [
        { label: "LinkedIn", url: "/" },
        { label: "YouTube", url: "/" },
        { label: "Instagram", url: "/" },
        { label: "Twitter", url: "/" },
      ],
    },
    {
      label: "Learn",
      url: "/",
      subNav: [
        { label: "Contact", url: "/" },
        { label: "Privacy + Terms", url: "/" },
        { label: "Google", url: "/" },
        { label: "Alphabet", url: "/" },
      ],
    },
  ];
  return (
    <section className="h-container">
      <nav className="max-w-screen-lg my-10 mx-auto md:grid grid-cols-12">
        {navigation &&
          navigation.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "col-span-6" : "col-span-3"
              } flex flex-col`}
            >
              <Link
                href={item?.url}
                className="uppercase text-xl text-yellow-500 font-semibold"
              >
                {item?.label}
              </Link>

              {item?.subNav &&
                item?.subNav.map((sub, i) => (
                  <Link
                    key={i}
                    href={sub?.url}
                    className={`mt-10 ${index === 0 ? "text-4xl" : "text-xl"}`}
                  >
                    {sub?.label}
                  </Link>
                ))}
            </div>
          ))}
        <div className="lg:col-span-3"></div>
        <div className="lg:col-span-3"></div>
      </nav>
    </section>
  );
};

export default NavBody;
