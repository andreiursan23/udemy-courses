import { useState } from "react";
import "./RotatingNav.css";

function RotatingNav() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(true);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <div
      className={
        !isMenuOpened
          ? "rotating-nav-container"
          : "rotating-nav-container menu-visible"
      }
    >
      <header>
        <div className={isMenuOpened ? "ham-menu" : "ham-menu open"}>
          <button href="#" onClick={openMenu} className="open-menu-btn">
            <img
              src="./hamburger-menu.png"
              alt="hamburger menu icon"
              height={"25px"}
            />
          </button>

          <button href="#" onClick={closeMenu} className="close-menu-btn">
            <img src="./close.png" alt="close menu icon" height={"25px"} />
          </button>
        </div>

        <nav>
          <div className="hidden-layer">
            <ul>
              <li className={isMenuOpened && "visible"}>
                <a href="#">
                  <img src="./home-icon.png" alt="home icon" height={"25px"} />
                  <span>Home</span>
                </a>
              </li>
              <li className={isMenuOpened && "visible"}>
                <a href="#">
                  <img src="./user.png" alt="about icon" height={"25px"} />
                  <span>About</span>
                </a>
              </li>
              <li className={isMenuOpened && "visible"}>
                <a href="#">
                  <img src="./email.png" alt="contact icon" height={"25px"} />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className={isMenuOpened && "menu-opened"}>
        <section>
          <article>
            <h2>Amazing Article</h2>
            <h3>Andrei Ursan</h3>

            <p>
              Doggo ipsum woofer very hand that feed shibe. Much ruin diet tungg
              pupper fat boi, heckin good boys and girls borkf boof mlem, wow
              such tempt shoob. floofs dat tungg tho blop. Long doggo such treat
              pupper tungg thicc, mlem puggo. Shooberino long doggo smol long
              water shoob dat tungg tho you are doing me a frighten, thicc
              length boy very taste wow super chub. Doge tungg shooberino big
              ol, corgo. Wow such tempt corgo waggy wags I am bekom fat snoot,
              long doggo boof long doggo. Smol borking doggo with a long snoot
              for pats shoober pupperino big ol wow such tempt you are doing me
              a frighten, boofers wow very biscit corgo long water shoob. very
              hand that feed shibe snoot puggorino. Puggo big ol pupper snoot
              heckin angery woofer, h*ck. Aqua doggo ur givin me a spook
              wrinkler very good spot bork, extremely cuuuuuute very good spot.
              Sub woofer adorable doggo extremely cuuuuuute puggo lotsa pats
              extremely cuuuuuute, you are doing me the shock h*ck noodle horse
              woofer, aqua doggo lotsa pats wrinkler long bois.
            </p>
            <p>
              Borkf pupper shoober fat boi woofer stop it fren noodle horse, vvv
              long doggo shibe long woofer mlem. Very hand that feed shibe doing
              me a frighten very hand that feed shibe thicc, shoob pupper.
              maximum borkdrive borking doggo. Sub woofer noodle horse heckin
              good boys vvv, such treat boofers. tungg ruff. adorable doggo.
              Boof borkf vvv I am bekom fat, you are doin me a concern porgo.
              Smol dat tungg tho boof long bois what a nice floof stop it fren,
              I am bekom fat doggo smol.
            </p>

            <figure className="dog-img">
              <figcaption>My Dog</figcaption>
              <img
                src="./dog-orange.jpg"
                alt="light brown and white puppy on orange background"
                width={"900px"}
              />
            </figure>

            <p>
              Doggo ipsum the neighborhood pupper such treat I am bekom fat
              porgo heckin good boys, stop it fren vvv puggorino. snoot doing me
              a frighten. Yapper long bois adorable doggo heckin good boys the
              neighborhood pupper, heckin good boys you are doing me the shock
              clouds. noodle horse sub woofer shoober. corgo heckin good boys.
              Sub woofer ruff the neighborhood pupper long bois wow such tempt
              h*ck, doing me a frighten doggorino shoober borkf, such treat you
              are doing me the shock smol borking doggo with a long snoot for
              pats pupper. Snoot thicc very taste wow long woofer, lotsa pats
              pupper. Boof much ruin diet the neighborhood pupper floofs long
              doggo heckin angery woofer puggo, long doggo ruff he made many
              woofs smol. Noodle horse wow such tempt big ol pupper pupperino
              floofs, aqua doggo wow such tempt bork.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default RotatingNav;
