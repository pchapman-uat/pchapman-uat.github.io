import GalleryItem from "@/classes/GalleryItem";
import PROJECTS from "@/classes/Projects";
import { BOARDS } from "@/constants";
import BoardsPage from "@/elements/BoardsPage";
import Divider from "@/elements/Divider";
import Gallery from "@/elements/Gallery";
import Link from "@/elements/Link";
import LogoList from "@/elements/LogoList";
import Shield from "@/elements/Shield";
import { MobSFReport, MobSFReportBanner } from "@/pages/SIP/SIP.assets";
import BoardsCSS from "@/style/boards.module.css";
import MainCSS from "@/style/main.module.css";
import { useRef } from "react";
import {
  AWSCloudArchitecture,
  GoatDroid,
  IoTSecurityReport,
  LogicalAndPhysicalMap,
  LogicalMap,
  NTW216Documentation,
  OrganizationalDesign,
  PhysicalMap,
} from "./BoardsNE.assets";
export default function Boards_NE() {
  const documentation = useRef<HTMLIFrameElement | null>(null);
  const goToDocumentationPage = (page: number) => {
    const iframe = documentation.current;
    if (!iframe) return;

    const baseUrl = iframe.src.split("#")[0].split("?")[0];
    const newSrc = `${baseUrl}?page=${page}&_=${Date.now()}#page=${page}`;

    iframe.src = newSrc;
  };

  const TopologiesGalleryItems = [
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
  ];
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
          <Gallery items={TopologiesGalleryItems} />
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
      <>
        <div>
          <h4>AWS Cloud Architecture | NTS336</h4>
          <p>
            Amazon Web Services (AWS) provides all-in-one experience for your
            company when working in the cloud. With services ranging from access
            control, storage, security, virtual machines, and more, it can be an
            excellent opportunity for companies. During this assignment I went
            over a multitude of different services that AWS provides, and
            explain how each one is used and is important. This document went
            over the following services:
          </p>
          <ul>
            <li>Architecture</li>
            <li>IAM</li>
            <li>EC2</li>
            <li>S3</li>
            <li>RDS</li>
            <li>DynamoDB</li>
            <li>VPC Networking</li>
            <li>Security</li>
            <li>Lambda</li>
            <li>CloudWatch</li>
            <li>CloudFormation</li>
            <li>High Availability</li>
            <li>Scaling</li>
            <li>DevOps</li>
            <li>Deployment</li>
            <li>Advanced Management</li>
          </ul>
          <div className={MainCSS.pdfContainer}>
            <iframe src={AWSCloudArchitecture} />
          </div>
        </div>
      </>
      <>
        <div>
          <h4>Final Project 2.0 (Documentation) | NTW216</h4>
          <p>
            This was a group project with: Keven Baquerizo; Giani Saldana;
            Rashalee Thompson
          </p>
          <p>
            <strong>Roles: Team Leader and Configuration Manager</strong>
          </p>
          <p>
            During the entirety of this class we where setting up a Windows
            Server, we had to configure services such as Active Directory,
            Samba, Devices, Users, and troubleshoot issues that our professor
            did to our servers. For this objective I will be going over specific
            troubleshooting tasks.
          </p>
          <h4>
            <Link
              href="#NTW216Documentation"
              onClick={() => {
                goToDocumentationPage(26);
              }}
            >
              No Internet (26)
            </Link>
          </h4>
          <p>
            On this day we discovered that our account was missing from the sign
            in screen, this was one of the tasks that we had to resolve. We
            first went to the other user section, and inputted the username and
            password for our account, logging us in. Next we noticed that the
            computer was not connected to internet, when going to the ethernet
            settings in windows it showed that the adapter was disabled. By
            going to &apos;Control Panel\Network and Internet\Network
            Connections&apos; we could then enable the adapter, resolving both
            of the issues we had.
          </p>
          <h4>
            <Link
              href="#NTW216Documentation"
              onClick={() => {
                goToDocumentationPage(16);
              }}
            >
              System Sate Backup (16)
            </Link>
          </h4>
          <p>
            In this case we where tasked with setting up a system backup. Before
            we did this we had added a secondary drive, meant for backups, then
            we configured this drive using &apos;Windows Server Backup&apos; and
            &apos;Local Backup&apos;
          </p>
          <div className={MainCSS.pdfContainer} id="NTW216Documentation">
            <iframe ref={documentation} src={NTW216Documentation} />
          </div>
        </div>
      </>
      <>
        <div>
          <h4>Final Project 2.0 (Documentation) | NTW216</h4>
          <p>
            This was a group project with: Keven Baquerizo; Giani Saldana;
            Rashalee Thompson
          </p>
          <p>
            <strong>Roles: Team Leader and Configuration Manager</strong>
          </p>
          <p>
            During the entirety of this class we where setting up a Windows
            Server, we had to configure services such as Active Directory,
            Samba, Devices, Users, and troubleshoot issues that our professor
            did to our servers. For this objective I will be going over specific
            administrative tasks.
          </p>
          <h4>
            <Link
              href="#NTW216Documentation2"
              onClick={() => goToDocumentationPage(56)}
            >
              Active Directory (56)
            </Link>
          </h4>
          <p>
            Active directory is a critical part of Windows Server, this works by
            having a domain, and then adding users to this domain. Each user can
            be assigned to a group, or have permission set directly. These
            permissions could be things like elevated privileges, configuration
            settings, password resets, and more. Active Directory works in
            tandem with Group Polices, with these two making the baseline of
            Access Controls.
          </p>
          <h4>
            <Link
              href="#NTW216Documentation2"
              onClick={() => goToDocumentationPage(54)}
            >
              Group Policy Management (54)
            </Link>
          </h4>
          <p>
            Just like Active Directory, Group Policy allow for in depth and
            advance permissions with Active Directory. With these policies you
            can create templates, and even automation. The polices we changed
            where regarding the windows security, specifically auditing, this is
            just one of the many things you can control using Group Polices.
          </p>
          <h4>
            <Link
              href="#NTW216Documentation2"
              onClick={() => goToDocumentationPage(28)}
            >
              Shares (28)
            </Link>
          </h4>
          <p>
            Windows Server is able to host shares, this allows users to open and
            view files remotely, either wirelessly on the same network, or with
            a VPN. Windows Shares is native to all windows versions, including
            home, and they work excellently with Active Directory and Group
            Policies.
          </p>
          <h4>
            <Link
              href="#NTW216Documentation2"
              onClick={() => {
                goToDocumentationPage(16);
              }}
            >
              System Sate Backup (16)
            </Link>
          </h4>
          <p>
            In this case we where tasked with setting up a system backup. Before
            we did this we had added a secondary drive, meant for backups, then
            we configured this drive using &apos;Windows Server Backup&apos; and
            &apos;Local Backup&apos;
          </p>
          <div className={MainCSS.pdfContainer} id="NTW216Documentation2">
            <iframe ref={documentation} src={NTW216Documentation} />
          </div>
        </div>
      </>
      <>
        <div>
          <h4>IoT Device Security Analysis Report | NTW233</h4>
          <p>This was a group project with: Keven Baquerizo</p>
          <p>
            During this class we did in depth research over an IoT device
            &quot;KSIZPE LED Strip Light&quot;, we analyzed the mobile
            application, and did a hardware analysis of the device to determine
            how secure it is. We looked into the issues regarding to the
            connection from the phone to the device, as anyone could control it
            with no authentication. We also looked into the security risks of
            the app itself, and looked into the issues with the hardware. In
            addition to all of these we looked at multiple documents, including
            the FCC report of the device.
          </p>
          <div className={MainCSS.pdfContainer} id="NTW216Documentation2">
            <iframe ref={documentation} src={IoTSecurityReport} />
          </div>
        </div>
        <Divider />
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
            For this specific objective these maps had to include IoT devices,
            this meant I had to consider the many security risks that come with
            adding IoT to your network. In both of these diagrams they are
            heavily segmented, so that if any of them where to get comprised,
            the rest of the network would not be at risk.
          </p>
          <Gallery items={TopologiesGalleryItems} />
          <div className={MainCSS.pdfContainer}>
            <iframe src={LogicalAndPhysicalMap} />
          </div>
        </div>
      </>
      <>
        <div>
          <h4>{PROJECTS.SIP.NAME}</h4>
          <div className={BoardsCSS.shieldsDiv}>
            <Shield
              type="github/stars"
              param={{ user: "pchapman-uat", repo: "Foobar-Controler-Mobile" }}
            />
            <Shield
              type="github/release"
              param={{
                user: "pchapman-uat",
                repo: "Foobar-Controler-Mobile",
                include_prereleases: true,
              }}
            />
            <Shield
              type="github/languages/top"
              param={{ user: "pchapman-uat", repo: "Foobar-Controler-Mobile" }}
            />
          </div>
          <LogoList links={PROJECTS.SIP.SOURCE_LINKS} />
          <p>{PROJECTS.SIP.DESCRIPTIONS[0]}</p>
          <p>
            Since this is a mobile application made for Android, we are able to
            do a security analysis on the app, using MobSF we can validate the
            security of the application, and apply industry standards and
            security principles.
          </p>
          <img src={MobSFReportBanner} className={MainCSS.fullImg} />
          <div className={MainCSS.pdfContainer}>
            <iframe src={MobSFReport} />
          </div>
          <p>
            In addition to the MobSF report, the application uses HTTP to handle
            traffic, although it does not use HTTPS, this is because of
            limitations with the API. However, the application is meant to only
            be used locally, and if needed remotely, it works with a VPN.
            Lastly, the application has multiple validation steps, including
            ESLint and Dependabot.
          </p>
          <div className={BoardsCSS.iconsDiv}>
            <Link type="button" href="/SIP/">
              Read More
            </Link>
          </div>
        </div>
        <Divider />
        <div>
          <h4>GoatDroid | NTW233</h4>
          <p>
            In this assignment we were tasked with reverse engineering an IoT
            application, instead of working with our existing device we were
            tasked with using Goat Droid. This report gives us information
            regarding the application, such as warnings about Logging being
            used, JS enabled in Webview, and more. This information can be
            critical to understanding the security of your application, or of an
            application you are using.
          </p>
          <div className={MainCSS.pdfContainer}>
            <iframe src={GoatDroid} />
          </div>
        </div>
      </>
    </BoardsPage>
  );
}
