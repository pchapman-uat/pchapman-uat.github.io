import GalleryItem from "@/classes/GalleryItem";
import { BOARDS } from "@/constants";
import BoardsPage from "@/elements/BoardsPage";
import Divider from "@/elements/Divider";
import Gallery from "@/elements/Gallery";
import Link from "@/elements/Link";
import BoardsCSS from "@/style/boards.module.css";
import MainCSS from "@/style/main.module.css";
import LogicalAndPhysicalMap from "./assets/documents/NTW275-8.1-Logical_and_Physical_Topologies-PChapman.pdf";
import OrganizationalDesign from "./assets/images/NTW275-5.1.svg?react";
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
        <Divider />
        <div>
          <h4>Organizational Network Design | NTW275</h4>
          <p>
            In this assignment we where told to find a company on Indeed, in
            this case I chose Infosys, and based on the job requirements, we
            needed to come up with a design for their network. There were three
            core points that I wanted to focus on with this design, those being
            Remote Workers, Cloud Computing and Segmentation. Infosys was
            originated in India, and has locations in Arizona, Texas, Mexico and
            Canada. Because of this I need to make sure no matter where an
            employee is, they will be able to do their work. This leads into
            cloud computing, as based on my research Infosys tends to use Azure,
            while having public accessible servers, virtual machines, virtual
            networks, and app hosting. Lastly I designed the network around the
            Cisco Tetration (CSW), this way there is proper subletting on the
            network.
          </p>
          <h5>Devices</h5>
          <table className={BoardsCSS.NETable}>
            <tr>
              <th>Device</th>
              <th>Price</th>
              <th>Usage</th>
            </tr>
            <tr>
              <td>
                <Link href="https://a.co/d/eWTWu7i" target="_blank">
                  Cisco ASA 5515-X Firewall Edition
                </Link>
              </td>
              <td>$142.41 x 2 *</td>
              <td>
                Firewall with multiple network ports, used on the employee
                network, and after the modem.
              </td>
            </tr>
            <tr>
              <td>
                <Link href="https://a.co/d/aM5aWAq" target="_blank">
                  Cisco Business 145AC Wi-Fi Access Point
                </Link>
              </td>
              <td>$63.37 x2</td>
              <td>
                Supports wireless and 2-3 LAN ports, used for the Guest Network,
                and the Employee network.
              </td>
            </tr>
            <tr>
              <td>
                <Link href="https://a.co/d/7UO6Zpq" target="_blank">
                  Cisco Catalyst 1200-48P-4G
                </Link>
              </td>
              <td>$815.93</td>
              <td>
                Larger switch with 48 ports, use mainly for the Upper Switch in
                the Employee Network
              </td>
            </tr>
            <tr>
              <td>
                <Link href="https://a.co/d/cFDdw8t" target="_blank">
                  Cisco Catalyst 1200-8T-D
                </Link>
              </td>
              <td>$156.23</td>
              <td>Lower Switch for the IT network with 8 ports</td>
            </tr>
            <tr>
              <td>
                <Link href="https://a.co/d/7tV6tkx" target="_blank">
                  HP Z4 G4 Workstation
                </Link>
              </td>
              <td>$418.56 *</td>
              <td>Workstation for employees</td>
            </tr>
          </table>
          <p>* Price Based on Refurbished Listings</p>
          <h5>Services</h5>
          <table>
            <tr>
              <th>Service</th>
              <th>Price</th>
              <th>Usage</th>
            </tr>
            <tr>
              <td>Open VPN / Tailscale</td>
              <td>Free - Monthly Tiers </td>
              <td>
                VPN For Remote Access, either for encrypting all traffic or just
                traffic for the cluster devices
              </td>
            </tr>
            <tr>
              <td>Azure Networking</td>
              <td>$0.01 /GB *</td>
              <td>
                Allow for networking between virtual devices, such as routers,
                switches, VPN, and machines
              </td>
            </tr>
            <tr>
              <td>AKS</td>
              <td>$0.10/cluster/hour</td>
              <td>
                Allow for developer tools such as node, app development, API,
                and SLA
              </td>
            </tr>
            <tr>
              <td>NGINX plus</td>
              <td>$2,500/year**</td>
              <td>Host HTTP/HTTPS, email, and other web services</td>
            </tr>
            <tr>
              <td>CSW SaaS</td>
              <td>$3/month***</td>
              <td>
                AI based network manager to improve security against attacks
              </td>
            </tr>
          </table>
          <p>* Price Varies on Tiers and services</p>
          <p>** Price is for cloud hosted service</p>
          <p>*** Pricing is not public</p>
          <div className={MainCSS.largeSVGContainer}>
            <OrganizationalDesign />
          </div>
          <div className={MainCSS.pdfContainer}>
            <iframe src="https://uatedu-my.sharepoint.com/personal/pchapman82070_uat_edu/_layouts/15/Doc.aspx?sourcedoc={c845f884-a71a-4e37-ad82-1d3031a46057}&amp;action=embedview&amp;wdAr=1.7777777777777777">
              This is an embedded{" "}
              <Link target="_blank" href="https://office.com">
                Microsoft Office
              </Link>{" "}
              presentation, powered by{" "}
              <Link target="_blank" href="https://office.com/webapps">
                Office
              </Link>
              .
            </iframe>
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
