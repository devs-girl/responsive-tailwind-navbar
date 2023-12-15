import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Link, NavLink, useLocation } from 'react-router-dom';
import BtnLogo from '../../img/btn-logo.png';
import Logo from '../../img/logo.png';
// import AdminNavbar from '../admin/components/Navbar';
// import AddToSlack from './AddToSlack';

const Navbar = ({ id }) => {
  const [open, setOpen] = useState(false);
  let location = useLocation();

  if (location.pathname.includes('/admin')) {
    // return <AdminNavbar />;
  } else {
    return (
      <div className="bg-lightpurple flex justify-between items-center md:text-lg lg:text-xl max-w-screen-2xl py-4 sticky top-0 z-50">
        <div className="ml-6 md:ml-[50px]">
          <NavLink to="/">
            <img
              src={Logo}
              alt="MeeTeam"
              className="max-h-12 md:max-h-16 lg:max-h-24 max-w-20"
            />
          </NavLink>
        </div>
        <div className="hidden md:flex basis-[60%] md:basis-[46%] justify-center items-center font-semibold md:gap-x-8 lg:gap-x-20">
          <NavLink
            to="/features"
            className={({ isActive }) =>
              isActive ? 'text-purple ' : 'text-black opacity-70'
            }
          >
            Features
          </NavLink>
          <NavLink
            to="/whymeeteam"
            className={({ isActive }) =>
              isActive ? 'text-purple' : 'text-black opacity-70'
            }
          >
            Why MeeTeam
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? 'text-purple' : 'text-black opacity-70'
            }
          >
            Pricing
          </NavLink>
        </div>

        <div className="hidden md:block flex-column text-center mr-6 md:mr-[40px]">
          <button className="flex justify-between items-center md:mb-2 mb-1 text-white font-semibold bg-[#54004B] text-lg md:text-xl lg:px-10 px-4 md:px-5  py-2 md:py-2 lg:py-3 rounded-full">
            <img className="pr-2 w-6 md:w-10" src={BtnLogo} alt="" />
            Add to Slack
          </button>
          <Link to="/Login" className="pr-4">
            <i>or</i> {id ? 'Go to Admin Console' : 'Login'}
          </Link>
        </div>

        <div className=" block md:hidden  mr-6">
          {' '}
          {open ? (
            <div onClick={() => setOpen(false)}>
              <AiOutlineClose color="black" size={25} />
            </div>
          ) : (
            <div onClick={() => setOpen(true)}>
              <FiMenu color="black" size={25} />
            </div>
          )}
        </div>
        {/* mobile responsive  */}
        {open && (
          <div className=" flex flex-col md:hidden basis-[60%] md:basis-[46%] justify-center items-center font-bold gap-x-20 bg-gray-300 absolute top-20 inset-x-0 py-6 text-lg ">
            <div className="flex flex-col">
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive ? 'text-[#54004B] mb-2 ' : 'text-black mb-2'
                }
              >
                Features
              </NavLink>
              <NavLink
                to="/whymeeteam"
                className={({ isActive }) =>
                  isActive ? 'text-[#54004B] mb-2' : 'text-black mb-2'
                }
              >
                Why MeeTeam
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? 'text-[#54004B] mb-2' : 'text-black mb-2'
                }
              >
                Pricing
              </NavLink>
            </div>
            <div className="block md:hidden flex-column text-center mr-6 md:mr-[40px]">
              <button className="flex justify-between items-center md:mb-2 mb-1 text-white font-semibold bg-[#54004B] text-lg md:text-xl px-4 md:px-5 lg:px-10 py-2 md:py-2 lg:py-3 rounded-full">
                <img className="pr-2 w-6 md:w-10" src={BtnLogo} alt="" />
                Add to Slack
              </button>
              <Link to="/Login" className="pr-4">
                <i>or</i> {id ? 'Go to Admin Console' : 'Login'}
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Navbar;
