import GalleryItem from "@/classes/GalleryItem";
import { BOARDS } from "@/constants";
import BoardsPage from "@/elements/BoardsPage";
import Gallery from "@/elements/Gallery";
import MainCSS from "@/style/main.module.css";
import LogicalAndPhysicalMap from "./assets/documents/NTW275-8.1-Logical_and_Physical_Topologies-PChapman.pdf";
import LogicalMap from "./assets/images/NTW275-8.1-Logical_Map-PChapman.svg?react";
import PhysicalMap from "./assets/images/NTW275-8.1-Physical_Map-PChapman.svg?react";
export default function Boards_NE() {
  return (
    <BoardsPage
      objectives={BOARDS.objectives.NE}
      major={"Network Engineering"}
      descriptions={BOARDS.descriptions.NE}
    >
      <>
        <div>
          <h4>Logical and Physical Topologies | NTW275</h4>
          <p>
            In this assignment we were tasked with changing a logical network
            map to a physical network map, and a physical map to a logical map.
            For each of these we had to account for different IP addresses,
            devices, VLANs, subnetting, and room placement. We had to take into
            consideration of the company that we are design the maps for, to
            understand the layout, requirements, devices, cables and more.
          </p>
          <p>
            Each of these diagrams needed to have multiple computers, servers,
            networking, and even smart devices. Every device needed to be
            represented, ladled, and organized, showing either where they are
            located, or the logical groups of the devices. I wanted to have
            these documented look organized and professional, while keeping the
            knowledge requirement low, so anyone regardless of experience should
            be able to understand it to some extent.
          </p>
          <Gallery
            items={[
              new GalleryItem(
                "Physical Map",
                PhysicalMap,
                "When designing the physical map I had to understand where reach room would be, and how they would be accessed. Also understanding how to keep critical devices secure, and having user devices accessible. "
              ),
              new GalleryItem(
                "Logical Map",
                LogicalMap,
                "Although simpler, I had to manage the different devices, and assign them proper IP addresses and VLANs. I decided that to better orginize each VLAN, having a swich with even subnet would allow for more management and control. This also allows for a more streamlined plan for expanding."
              ),
            ]}
          />
          <div className={MainCSS.pdfContainer}>
            <iframe src={LogicalAndPhysicalMap} />
          </div>
        </div>
      </>
      <></>
      <></>
      <></>
      <></>
      <></>
    </BoardsPage>
  );
}
