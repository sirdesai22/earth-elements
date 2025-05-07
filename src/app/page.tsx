import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f2ee]">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <span className="text-sm font-medium">Earth Elements</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-sm hover:underline">
            Home
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Services
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Projects
          </Link>
          <Link href="#" className="text-sm hover:underline">
            About
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm">
            <Instagram className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-sm">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-sm">
            <Twitter className="h-4 w-4" />
          </Link>
          <Button variant="outline" className="text-xs rounded-full px-4 border-black text-black">
            Contact us
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl font-serif max-w-xl">Earth Elements and Solutions</h1>
          <div className="grid md:grid-cols-1 gap-8 mt-8">
            <div className="relative h-[400px] md:h-[500px] bg-gray-100">
              <Image
                src="https://www.amazingarchitecture.com/photos/5/Spaces%20Architects%40ka/INTERSEKT%20TILES%20SHOWROOM/INTERSEKT%20%E2%80%93_TILES_SHOWROOM_Spaces_Architects%40ka_NewDelhi_India_029.jpg"
                alt="Interior design showcase"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-sm mb-4 max-w-md">Designs inspired to bring your spaces to life</p>
              <div className="flex items-center justify-between">
                <Button variant="outline" className="rounded-full px-6 py-2 border-black text-black text-xs">
                  View Our Portfolio
                </Button>
                <span className="text-sm">01/05</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-serif mb-8">Residential Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[300px] bg-gray-100">
              <Image
                src="https://d3joggurz1vobr.cloudfront.net/static/uploads/9b628259-dfa9-4b0e-82ad-599e77943333-1673764069408.jpeg"
                alt="Living room design"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs bg-white px-2 py-1">Living Room</span>
              </div>
            </div>
            <div className="relative h-[300px] bg-gray-100">
              <Image src="https://m.media-amazon.com/images/I/91lMkFM+VqL.jpg" alt="Kitchen design" fill className="object-cover" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs bg-white px-2 py-1">Kitchen</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="bg-black text-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Your home, your reflect on</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[200px] bg-gray-700">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10KSNh23nm98LCiayr0i6dpSQ0HK90W2lxQ&s"
                      alt="Commercial design"
                      fill
                      className="object-cover opacity-90"
                    />
                  </div>
                  <div className="relative h-[200px] bg-gray-700">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDoxvAAFNVJAEFlcIq0wK0T4TK1Qstgccn6w&s"
                      alt="Commercial design"
                      fill
                      className="object-cover opacity-90"
                    />
                  </div>
                  <div className="relative h-[200px] bg-gray-700">
                    <Image
                      src="https://www.hrjohnsonindia.com/assets/images/blog/kitchen-tiles-designs.jpg"
                      alt="Commercial design"
                      fill
                      className="object-cover opacity-90"
                    />
                  </div>
                  <div className="relative h-[200px] bg-gray-700">
                    <Image
                      src="https://apollotile.com/cdn/shop/files/URBANAWOOD.jpg?v=1726749477"
                      alt="Commercial design"
                      fill
                      className="object-cover opacity-90"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Commercial Service</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[120px] bg-gray-700">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxjgfqFWUayNvuEXWTw5jmWvp8Cbviq-dcA&s"
                      alt="Retail design"
                      fill
                      className="object-cover opacity-90"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50">
                      <span className="text-xs">Retail Shop Design</span>
                    </div>
                  </div>
                  <div className="relative h-[120px] bg-gray-700">
                    <Image
                      src="https://www.johnson-tiles.com/media/filer_public_thumbnails/filer_public/d5/da/d5da2237-3969-4d20-87eb-7c0583776322/everglow_thumb.jpg__1440x0_q85_subsampling-2_upscale.jpg"
                      alt="Salon design"
                      fill
                      className="object-cover opacity-90"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50">
                      <span className="text-xs">Salon Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">
            Breathtaking Interior Design and Fitouts by Earth Elements
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center mb-4">
                <span className="text-sm">01</span>
              </div>
              <span className="text-sm">Inspiration</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center mb-4">
                <span className="text-sm">02</span>
              </div>
              <span className="text-sm">Functionality</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center mb-4">
                <span className="text-sm">03</span>
              </div>
              <span className="text-sm">Worthy</span>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-sm max-w-2xl mb-6">
              Welcome to Earth Elements Design and Fitout, where luxury and style are defined. Over the past 15 years,
              we have established ourselves as a premier interior design company that offers the sophistication and
              individuality.
            </p>
            <Button variant="link" className="text-xs text-black p-0">
              Learn more
            </Button>
          </div>
          <div className="mt-12">
            <div className="relative h-[400px] bg-gray-100">
              <Image
                src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202211/experiment-with-wooden-tiles-in-your-home-interior-design/title-wooden-tiles-interiors.jpg.transform/bh-tb-image-container/image.webp"
                alt="Interior design showcase"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Explore our selection of completed interior projects</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <p className="text-sm max-w-md mb-6">
                Discover a curated showcase of our finished interior projects, demonstrating our expertise and
                creativity in transforming spaces.
              </p>
            </div>
          </div>

          {/* Project 1 */}
          <div className="mt-12 border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-xs">Residential Service</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Apartment Interior Design and Fit out</h3>
              </div>
              <div className="flex justify-between items-center">
                <Button variant="link" className="text-xs text-black p-0">
                  View Project
                </Button>
                <span className="text-xs">01/06</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="relative h-[250px] bg-gray-100">
                <Image
                  src="https://media.designcafe.com/wp-content/uploads/2020/10/22162905/vitrified-tiles-design-ideas-for-your-home.jpg"
                  alt="Apartment interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[250px] bg-gray-100">
                <Image
                  src="https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202311/hallway-tiles-design/title-hallway-design.jpg"
                  alt="Apartment interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="mt-12 border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-xs">Commercial Service</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Retail Interior Design & fit out</h3>
              </div>
              <div className="flex justify-between items-center">
                <Button variant="link" className="text-xs text-black p-0">
                  View Project
                </Button>
                <span className="text-xs">02/06</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="relative h-[250px] bg-gray-100">
                <Image
                  src="https://www.architectandinteriorsindia.com/cloud/2021/11/15/Story-2_1.jpeg"
                  alt="Retail interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[250px] bg-gray-100">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0761/8649/files/image11_bee19e94-26c5-401e-8213-0187d2b1fa82.JPG?v=1488808833"
                  alt="Retail interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="link" className="text-xs text-black inline-flex items-center gap-2">
              View more projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="relative h-[300px] bg-gray-100">
            <Image src="https://www.surfacesreporter.com/myuploads/TILE-SECTION.jpg" alt="Interior design" fill className="object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 text-white">
              <h2 className="text-2xl md:text-3xl font-serif mb-6">Newsletter subscribe</h2>
              <Button variant="outline" className="rounded-full px-6 py-2 border-white text-white text-xs">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f5f2ee] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-black rounded-full"></div>
                <span className="text-sm font-medium">Earth Elements</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Link href="#" className="text-sm">
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link href="#" className="text-sm">
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link href="#" className="text-sm">
                  <Twitter className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-medium mb-4">Projects</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-xs hover:underline">
                      Residential
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs hover:underline">
                      Commercial
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs hover:underline">
                      Retail
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-4">About us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-xs hover:underline">
                      Our story
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs hover:underline">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-4">Start project</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-xs hover:underline">
                      News
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-4">Email</h3>
                <p className="text-xs">info@earthelements.com</p>
                <p className="text-xs mt-4">UAE</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs mb-4 md:mb-0">© 2023 Copyright Earth Elements</p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs hover:underline">
                Terms of service
              </Link>
              <Link href="#" className="text-xs hover:underline">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
