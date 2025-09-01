import { useEffect } from "react";
// import samimage from "../assets/Profile_Photo.png";
import backgroundImage1 from "../assets/background2.png";
import logo from "../assets/logo.jpg";
// import { useState } from "react";
import { gsap } from "gsap";

function HomeScreen() {
  // for mobile UI
  // const [menu, setMenu] = useState(false)
  useEffect(() => {
    // main body
    gsap
      .timeline({ ease: "power1.easeInOut" })
      .to(".Main-screen", {
        duration: 1,
      })
      .fromTo(
        ".content",
        { opacity: 0, scale: 1.5 }, // starting point
        { opacity: 1, scale: 1, duration: 1, stagger: 0.2 }, // end state
        "-=0.5"
      )
      .fromTo(
        ".samText h1",
        { opacity: 0, scale: 1.3, y: 50 }, // starting point
        { opacity: 1, scale: 1, duration: 1, stagger: 0.2 }, // end state
        "-=0.5"
      );

    gsap
      .timeline({ ease: "power1.easeInOut" }).fromTo(
        "header",{ y: -500 },
        {
          duration: 1.2,
          y: 0,
        })
      .fromTo(
        "header .logo",
        { y: -100 },
        {
          duration: 0.5,
          y: 0,
        }
      )
      .fromTo(
        "header .menu li",
        { y: -100 },
        {
          duration: 0.5,
          y: 0,
          stagger: 0.1,
        },
        "-=0.4"
      );
  }, []);

  return (
    <div className="Main-screen">
      <div className="wrapper overflow-hidden">
        <header className="fixed left-0 z-[10] w-full flex justify-between items-center bg-[rgba(0,0,0,0.3)] backdrop-blur-[4px] px-[2vw] py-0 ">
          {/* Logo */}
          <div className="logo">
            <img
              className="w-[80px] relative p-2 rounded-full overflow-hidden"
              src={logo}
              alt="logo"
            />
          </div>

          {/* Hamburger Button - visible only on mobile */}
          {/* <div className="flex-1 flex justify-center sm:hidden">
        <button
          onClick={() => setMenu(prev => !prev)}
          className="flex flex-col justify-center items-center space-y-1.5"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div> */}

          {/* Desktop Menu */}
          <div className="menu hidden sm:inline-block">
            <ul className="flex space-x-8">
              <li className="homeScreenListItems">
                <a className="homeScreentListItemAnchorTag" href="#">
                  Home
                </a>
              </li>
              <li className="homeScreenListItems">
                <a className="homeScreentListItemAnchorTag" href="#">
                  Projects
                </a>
              </li>
              <li className="homeScreenListItems">
                <a className="homeScreentListItemAnchorTag" href="#">
                  Qualification
                </a>
              </li>
              <li className="homeScreenListItems">
                <a className="homeScreentListItemAnchorTag" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          {/* {menu && (
        <div className="menu absolute top-[100%] left-0 w-full bg-black text-white sm:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Home
              </a>
            </li>
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Projects
              </a>
            </li>
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Qualification
              </a>
            </li>
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )} */}
        </header>
        <div
          className="content relative select-none"
          style={{
            backgroundImage: `url(${backgroundImage1})`,
            backgroundSize: "cover", // optional
            backgroundPosition: "center", // optional
          }}
        >
          {/* Fullscreen Overlay */}
          <div className="logoImage relative h-screen flex justify-center items-center overflow-hidden">
            {/* Image */}
            {/* <img
              className="image-inner max-w-full h-auto object-contain z-10"
              src={samimage}
              alt="Profile"
            /> */}

            {/* Text */}
            <div className="samText absolute top-[-10vh] inset-0 flex flex-col items-center justify-center leading-[0.9] text-center text-[#45d5eeda]">
              <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[12vw] tracking-widest font-bold">
                I'm
              </h1>
              <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[14vw] tracking-widest font-extrabold">
                Sam
              </h1>
            </div>
          </div>
        </div>

        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet! Id ipsam dolore aliquam facilis earum corporis corrupti a amet nam optio, dolores laboriosam cumque delectus. Nulla veniam voluptatum maxime?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut porro delectus cumque exercitationem enim asperiores velit doloribus qui, autem debitis. Dolorem eum dolore recusandae non magnam, adipisci fuga doloremque harum fugit illum fugiat error cupiditate ratione tenetur. Modi recusandae minima mollitia at veniam quod! Excepturi quidem earum sed fugiat quod laboriosam nesciunt? Perferendis voluptatum voluptas iure minima, expedita itaque explicabo reprehenderit quia voluptates ad ducimus quisquam quis dolore excepturi. Assumenda fuga exercitationem optio odio voluptatem harum quidem voluptatibus iusto dolorum magni. Explicabo dignissimos voluptatem culpa officia assumenda illum! Suscipit libero itaque ea velit, quibusdam in ab ullam labore eaque voluptatum delectus veniam beatae at sunt molestias quam dolor iste, distinctio ipsum hic praesentium quisquam. Quasi, animi. Dicta possimus cupiditate ipsa laborum, nesciunt blanditiis delectus et architecto praesentium eius perferendis accusantium cumque veritatis in doloribus suscipit voluptatibus libero pariatur dolores dignissimos id! Dignissimos, id animi corrupti hic tempore numquam excepturi placeat repellat, vel consequatur facere magni ducimus labore? Quo doloribus vitae hic quisquam odio quia ducimus sit dolorum voluptates. Non provident quasi, omnis ad fugit unde aspernatur dolore ipsam voluptates obcaecati eligendi aliquid soluta nisi aliquam similique odio quia ut suscipit molestiae laudantium deserunt facilis sunt? Placeat aliquam molestiae rerum dignissimos illo amet ad totam nihil a suscipit, aliquid expedita minima sit earum vitae quo nulla tempore adipisci debitis fugiat exercitationem quos impedit ipsa! Fugit officiis velit nam sit quae repudiandae illo vel fuga eum possimus, porro temporibus ipsum ipsam provident numquam ad. Perspiciatis, rerum, ut quas officia sed illo neque distinctio saepe dolores, quo delectus veniam a est vel blanditiis molestias. Labore, vitae adipisci! Cum harum tempore excepturi voluptates est nesciunt! Nesciunt, vero repudiandae. Quae ratione consequatur recusandae doloremque dolor eos odit rerum! Quo laboriosam culpa debitis, praesentium consequatur alias eaque aspernatur qui iure suscipit consequuntur illo beatae officia commodi temporibus harum eligendi. Provident fugiat atque dignissimos recusandae nihil molestias delectus, cum veritatis, sunt id libero tempore consequuntur ratione laudantium itaque amet. Aliquid nostrum tenetur, at, cumque nulla omnis, hic eos dolores quas optio fugit velit perferendis! Nobis eaque similique voluptatibus temporibus obcaecati! Impedit facere placeat quis eius eum, sunt qui ipsum, enim quo officiis reprehenderit quasi illo porro nam dolor quas commodi architecto, quae excepturi dolores quisquam. Sunt enim, corporis omnis recusandae consectetur magni commodi quisquam sint architecto eos sit ut perferendis officia iure maiores fuga? Blanditiis placeat iste et, facilis rerum saepe quod eaque iure, culpa sequi repudiandae, tenetur soluta voluptate dolores quis libero ex labore autem enim doloribus. Numquam soluta velit ab officiis? Velit ex cumque quidem rem excepturi dignissimos, assumenda cupiditate praesentium earum nesciunt et! Saepe neque veniam quas porro in, eligendi nostrum temporibus dolor numquam exercitationem error placeat cumque totam ipsam hic voluptatem nam? Vel perspiciatis facere consequatur dolorem alias, iste reprehenderit cumque voluptatem. Id enim unde possimus ipsam labore quas inventore ea obcaecati quasi, sunt voluptatem temporibus similique recusandae debitis consectetur error ratione illum harum neque ipsum architecto nesciunt non aliquam fugit? Itaque ipsam facere rem culpa quasi iste praesentium numquam voluptates? Ipsam, dolorum? Omnis temporibus optio perferendis! Nobis ex numquam ducimus suscipit nihil sed fugiat laudantium minus deleniti accusamus dolores ipsam eum, consequatur possimus molestiae illum aspernatur corrupti magnam id, eos debitis dignissimos repellat architecto deserunt. Officia, omnis? Quidem tempora corporis, porro, expedita at placeat, explicabo fugit rerum harum perspiciatis dolore hic aperiam quo eligendi asperiores iusto facere sint consectetur ratione possimus! Voluptatibus id praesentium cum reiciendis temporibus possimus eius, dolorum nulla ducimus blanditiis beatae voluptates fugiat ratione? Consequatur maxime aliquid nisi esse alias corporis odio, quaerat pariatur rerum cum a mollitia. Inventore eius ratione labore laboriosam accusamus optio ullam illo quam debitis commodi, impedit molestias ab, sit sint. Voluptates iure perspiciatis doloribus debitis, assumenda rerum repellendus eius, odio voluptas error illum deserunt. Impedit quaerat vel sunt doloremque tempore laborum quae, commodi temporibus labore quo veniam, molestiae nihil recusandae. Natus vitae odio, distinctio, repellendus animi, hic labore tempore perspiciatis assumenda soluta corporis? Rerum vel obcaecati libero debitis molestias totam magni reprehenderit hic a aspernatur sequi, itaque, sunt amet perspiciatis nesciunt? Sed consectetur officiis excepturi pariatur voluptatem? Ratione quibusdam voluptatum molestiae corporis a temporibus voluptatibus. Alias, accusantium repudiandae rem quidem corporis tenetur quaerat, nobis, ducimus explicabo cum aperiam tempora. Inventore odio laboriosam enim blanditiis! Magni, eligendi ipsum dolores quibusdam in laudantium delectus fugit, officia voluptatem modi fuga reprehenderit necessitatibus voluptatum odio ea tempore doloremque illo id. Eaque ullam voluptatum dolor recusandae dolorum fugit in, exercitationem veniam ducimus tenetur velit distinctio hic, quasi autem vero sint qui officiis quas veritatis iste voluptates dicta laborum harum. Beatae laudantium itaque dolorem nisi rem, temporibus molestias voluptatibus sed magnam cum ipsam vel tenetur mollitia expedita voluptas assumenda eius, placeat, ducimus cupiditate aliquam numquam. Aperiam incidunt ipsam quas officiis magni itaque saepe ex reprehenderit voluptatem officia rem deleniti molestiae blanditiis corrupti harum repellendus totam sint sunt omnis quos, iusto velit temporibus? Debitis eos sed quod cumque numquam aliquam, maxime adipisci eum dolorum exercitationem iure qui, laborum atque hic distinctio aut ab aspernatur ipsum voluptas quisquam soluta magnam totam nobis ex! Quo, consectetur expedita ut accusamus id odio voluptates qui quas cumque. Ut vitae ea rem laboriosam nesciunt, debitis error cumque ducimus fugit quos mollitia pariatur! Voluptatem ipsum voluptatum repellat, eum fugit sequi magni doloribus ducimus laboriosam iste labore omnis maxime assumenda possimus commodi distinctio voluptas mollitia modi repudiandae. Soluta error explicabo ea id excepturi accusantium quidem optio cum dolor deserunt ullam, porro officiis ipsum eligendi neque eos, numquam magni rerum dolores esse vel animi. Quis atque aliquam odio facilis explicabo porro a debitis, distinctio earum? Delectus harum ipsa assumenda iusto provident expedita ea at hic? Facilis a sequi expedita, rem aperiam dicta nostrum culpa. Minima modi magni maiores saepe deleniti veniam blanditiis quis rem sint. Similique doloremque repudiandae modi quod at? Eaque adipisci, consectetur optio sapiente sequi possimus aut molestiae voluptates? Minus fugiat quae velit libero necessitatibus ad eius dolorum possimus nihil doloremque! Suscipit omnis ipsum molestias voluptatum aspernatur sed mollitia nobis eos corrupti, fuga fugit facere ut quasi nesciunt quod in nisi quia, voluptatibus excepturi! Natus, aliquam?
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
