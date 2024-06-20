import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const path = useLocation().pathname;
  const [category, setCategory] = useState([]);

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch("/api/category");
      const data = await res.json();
      setCategory(data);
    };

    fetchCategory();
  }, []);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar className="border-b-2 dark:bg-gradient-to-r from-gray-500 via-gray-800 to-gray-500 sticky top-0 z-40">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:white"
        >
          <img
            src="/logo-no-background.png"
            alt="I am live"
            className={`w-[15rem] ease-in duration-700 ${
              scrollY > 10 ? "w-[9rem]" : ""
            }  h-auto ml-7`}
          />
        </Link>
        {/* <form onSubmit={handleSubmit} className="relative">
          <TextInput
            type="text"
            placeholder="Search.."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="absolute inset-y-0 right-0 w-16 bg-transparent cursor-pointer"
            type="submit"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button> */}

        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
              className="z-30"
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/contact"} as={"div"}>
            <Link to="/contact">Contact</Link>
          </Navbar.Link>
          <h3 className="mt-2 md:hidden">Categories</h3>
          {category.map((cat) => (
            <Navbar.Link
              active={path === "/search?category=${cat.value}"}
              as={"div"}
              className="block md:hidden"
            >
              <Link to={`/search?category=${cat.value}`} id={cat.value}>
                {cat.label}
              </Link>
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <div className="p-2  hidden md:flex justify-around md:gap-5 overflow-hidden  border-y border-slate-200">
        {category.map((cat) => (
          <Link
            to={`/search?category=${cat.value}`}
            className="p-2  uppercase font-semibold text-xs hover:text-[#e68e73]"
            id={cat.value}
          >
            {cat.label}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Header;
