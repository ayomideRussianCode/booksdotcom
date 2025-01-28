import NavBar2 from "../components/NavBar2";
import Popular from "../components/home/Popular";
import RecentlySold from "../components/home/RecentlySold";

function PaymentDashboard() {
  return (
    <div>
      <NavBar2 />
      <div className="flex flex-row gap-3 pt-12">
        <p>Books {">"} </p>
        <p>Literature & Fiction {">"} </p>
        <p>Genre Fiction </p>
      </div>
      <div className="flex flex-row pt-6 gap-2 ">
        <div className="w-96">
          <img src="/Bestselling1.png" alt="A Novel" />
          <p className="text-xs">Roll over image to zoom in</p>
        </div>
        <div className="flex flex-row">
          <div className="w-96">
            <h3>The Secrets: A Novel</h3>
            <p>Softcopy</p>
            <small>
              <a href="/featuredauthors">Jonas Nill Barton </a>(Author,
              Narrator)
            </small>
            <h4>Summary</h4>
            <small className="text-xs">
              The Secret by Jonas Nilsson (often credited as Jonas Nill) is a
              suspenseful psychological thriller centered on themes of hidden
              truths and moral ambiguity. The story follows a protagonist
              grappling with a buried secret that threatens to upend their life.
              As the narrative unfolds, it explores the lengths people go to
              protect their past and the consequences of deception. The novel
              delves into the complexities of trust, relationships, and the
              impact of secrets on human connections, culminating in a gripping
              and unexpected resolution. Jonas Nilsson (often credited as Jonas
              Nill) is a suspenseful psychological thriller centered on themes
              of hidden truths and moral ambiguity. The story follows a
              protagonist grappling with a buried secret that threatens to upend
              their life. As the narrative unfolds, it explores the lengths
              people go to protect their past and the consequences of deception.
              The novel delves into the complexities of trust, relationships,
              and the impact of secrets on human connections, culminating in a
              gripping and unexpected resolution <a href="a">Read more</a>
            </small>
          </div>
          <div className=" w-96 border-customColor1 border-4 p-6 rounded-xl ml-10">
            <div className="flex flex-row">
              <div className="flex flex-row gap-2">
                <button className="w-full py-4 px-2 border border-customAsh rounded-lg ">
                  <p>Softcopy</p>
                  <p className="text-sm">$14.99</p>
                  <p className="text-sm">Available instantly</p>
                </button>
                <button className="w-full py-4 px-2 border border-customAsh rounded-lg ">
                  <p>Hardcopy</p>
                  <p className="text-sm">$25.89</p>
                  <p className="text-sm">Available instantly</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col pt-6">
              <button className="w-full py-4 px-2 border border-customAsh rounded-lg ">
                <p>Audiobook</p>
                <p className="text-sm">$20.99</p>
                <p className="text-sm">Available instantly</p>
              </button>
              <button className="w-full border rounded-lg px-4 py-2 focus:outline-none text-customWhite bg-orange-500 mt-6">
                Limited-time Offer
              </button>
              <small className="mt-4">
                Save over 20% off for all Copies of your choice{" "}
              </small>
              <button className="w-80 border rounded-full px-4 py-2 focus:outline-none text-customBlack bg-yellow-400 mt-6">
                Get this Deal
              </button>
              <ul className="text-xs pt-4">
                <li>1000 Softcopies are available for 20% discount </li>
                <li>500 Hardcopies are available for 20% discount </li>
                <li>700 Audiobooks are available for 20% discount </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Popular />
      <RecentlySold />
    </div>
  );
}
export default PaymentDashboard;
