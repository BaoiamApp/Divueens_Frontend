// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPinterest,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa6";
import MainLogo from "../../../assets/assets";

const _1stList = [
  {
    url: "",
    txt: "Who are we ?",
  },
  {
    url: "",
    txt: "Our Team",
  },
  {
    url: "",
    txt: "Press",
  },
  {
    url: "",
    txt: "Authenticity",
  },
  {
    url: "",
    txt: "Careers CSR",
  },
  {
    url: "",
    txt: "Divueens",
  },
  {
    url: "",
    txt: "Investor Relation",
  },
];

const baadiList = [
  {
    title: "Help",
    chhotiList: [
      {
        url: "",
        txt: "Contact Us",
      },
      {
        url: "",
        txt: "Frequently Asked Questions",
      },
      {
        url: "",
        txt: "Cancellation and Return",
      },
      {
        url: "",
        txt: "Shipping and Delivery ",
      },
      {
        url: "",
        txt: "Sell on Divueens",
      },
      {
        url: "",
        txt: "Privacy Policy",
      },
    ],
  },
  {
    title: "Inspire Us",
    chhotiList: [
      {
        url: "",
        txt: "Beauty Books",
      },
      {
        url: "",
        txt: "Divueens Network",
      },
    ],
  },
  {
    title: "Quick Links",
    chhotiList: [
      {
        url: "",
        txt: "Special Offers",
      },
      {
        url: "",
        txt: "Trendings",
      },
      {
        url: "",
        txt: "New Launches",
      },
      {
        url: "",
        txt: "Divueens Fashion",
      },
    ],
  },
  {
    title: "Top Categories",
    chhotiList: [
      {
        url: "",
        txt: "Makeup",
      },
      {
        url: "",
        txt: "Hair",
      },
      {
        url: "",
        txt: "Organics",
      },
    ],
  },
];

function Footer() {
  const [toggleView, cngView] = useState(0);
  const [prev, cngPrev] = useState(0);

  function ListItemsAll() {
    return baadiList.map((lst, index) => {
      return (
        <div
          className="col_ col-span-2 sm:col-span-1"
          // style={{ gridArea: `col_${index}` }}
          key={index}
          data-footer-part=""
        >
          <h3
            onClick={() =>
              prev !== index + 1 ? cngView(index + 1) : cngView(0)
            }
            className="drpBtn text-rose-950 text-md font-bold"
          >
            {lst.title}
            {toggleView === index + 1 ? (
              <FaChevronUp className="btnShow" />
            ) : (
              <FaChevronDown className="btnShow" />
            )}
          </h3>
          <ul
            className={`close ${
              toggleView === index + 1 ? "all_Items" : ""
            } mt-6 space-y-3 text-sm`}
          >
            {lst.chhotiList.map((list2, int) => {
              return (
                <li key={int}>
                  <Link
                    to={list2.url}
                    className="footerList text-rose-800 transition hover:text-pink-400"
                  >
                    {list2.txt}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  }

  useEffect(() => {
    ListItemsAll();
    cngPrev(toggleView);
  }, [toggleView]);

  return (
    <footer data-footer-part="" >
      <div className="md:pt-16 pt-14 ">
        <div
          className="row_ md:mt-8 md:px-24 px-8 grid grid-cols-1 lg:mt-0 lg:grid-cols-5"
          data-footer-part=""
        >
          <div
            className="col_ col-span-2 sm:col-span-1 lg:col-span-1"
            //  style={{ gridArea: "col_Head" }}
            data-footer-part=""
          >
            <Link to="/" className="logo">
              <img alt="" className="object-contain h-[4.5rem] w-22" src={MainLogo} />
            </Link>
            <ul className="all_Items mt-6 space-y-3 text-sm">
              {_1stList.map((list2, int) => {
                return (
                  <li key={int}>
                    <Link
                      to={list2.url}
                      className="footerList text-rose-800 transition hover:text-pink-400"
                    >
                      {list2.txt}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <ListItemsAll />
          <ul className="col_ col-span-2 flex justify-center gap-8 pt-20 md:pt-0 lg:pt-0 lg:pr-32 lg:col-span-5 lg:justify-end">
            <li>
              <a
                href=""
                className="text-rose-950 transition hover:text-rose-600"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href=""
                 className="text-rose-950 transition hover:text-rose-600"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href=""
                 className="text-rose-950 transition hover:text-rose-600"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-rose-950 transition hover:text-rose-600"
              >
                <FaPinterest className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
        <hr data-footer-part="" className="mt-6 mx-4 mb-10 md:mb-3 border-none h-[0.06em] bg-rose-950" />
        <div className="py-4 ">
          <div className="sm:flex sm:justify-between">
            <p className="copyright text-black/80 md:ml-20" data-footer-part="">
              DIVUEENS ©️ 2024 - All Rights Reserved
            </p>
            <ul className="flex flex-wrap justify-center mr-20 gap-4 text-xs sm:mt-0">
              <li>
                <a
                  href="/"
                  className="text-black/80 transition hover:underline"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-black/80 transition hover:underline"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-black/80 transition hover:underline"
                >
                  
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
