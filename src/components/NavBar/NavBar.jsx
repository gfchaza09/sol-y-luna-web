import { Navbar, Button, Link, Text, Image } from "@nextui-org/react";

export default function NavBar() {
  const collapseItems = ["About", "Menu", "Services", "Location"];


  return (
    <>
      <Navbar isCompact isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Link href="/">
            <Image
              hideIn="xs"
              src="/assets/logo/sol_y_luna_light.png"
              width={38}
              height={38}
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline-rounded">
          <Navbar.Link  isActive href="/about" >About</Navbar.Link>
          <Navbar.Link  href="/menu">
            Menu
          </Navbar.Link>
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="/location">Location</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Navbar.Link color="inherit" href="#">
            <Image
              src="/assets/icons-themes/moon-light.svg"
              width={24}
              height={24}
              alt="logo"
            />
          </Navbar.Link>
          <Navbar.Link>
            <Image
              src="/assets/icons-themes/sun-light.svg"
              width={24}
              height={24}
              alt="logo"
            />
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="default"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

// import {
//   Navbar,
//   Link,
//   Text,
//   Avatar,
//   Dropdown,
//   Button,
//   Image,
// } from "@nextui-org/react";

// export default function App() {
//   const collapseItems = ["About", "Menu", "Services", "Location"];

//   return (
//     <>
//       <Navbar variant="sticky">
//         <Navbar.Toggle showIn="xs" />
//         <Navbar.Brand
//           css={{
//             "@xs": {
//               w: "12%",
//             },
//           }}
//         >
//           <Image
//             src="/assets/logo/sol_y_luna_light.png"
//             width={38}
//             height={38}
//             alt="logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Content
//           enableCursorHighlight
//           activeColor="secondary"
//           hideIn="xs"
//           variant="highlight-solid-rounded"
//         >
//           <Navbar.Link isActive href="/about">
//             About
//           </Navbar.Link>
//           <Navbar.Link href="/menu">Menu</Navbar.Link>
//           <Navbar.Link href="/services">Services</Navbar.Link>
//           <Navbar.Link href="/location">Location</Navbar.Link>
//         </Navbar.Content>
//         <Navbar.Content
//           css={{
//             "@xs": {
//               w: "12%",
//               jc: "flex-end",
//             },
//           }}
//         >
//           <Navbar.Link href="#">
//             <Image
//               src="/assets/icons-themes/moon-light.svg"
//               width={24}
//               height={24}
//               alt="logo"
//             />
//           </Navbar.Link>
//           <Navbar.Link href="#">
//             <Image
//               src="/assets/icons-themes/sun-light.svg"
//               width={24}
//               height={24}
//               alt="logo"
//             />
//           </Navbar.Link>
//         </Navbar.Content>

//         <Navbar.Collapse>
//           {collapseItems.map((item, index) => (
//             <Navbar.CollapseItem
//               key={item}
//               activeColor="secondary"
//               css={{
//                 color: index === collapseItems.length - 1 ? "$error" : "",
//               }}
//               isActive={index === 2}
//             >
//               <Link
//                 color="inherit"
//                 css={{
//                   minWidth: "100%",
//                 }}
//                 href="#"
//               >
//                 {item}
//               </Link>
//             </Navbar.CollapseItem>
//           ))}
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// }
