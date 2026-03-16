"use client"
import Image from "next/image"
import * as React from "react"
import { Search, Instagram, ArrowRight } from "lucide-react"

const categories = ["All", "Skincare", "Hair", "Treatments", "Anti-Aging"]

type Blog = {
  id: number;
  category: string;
  title: string;
  desc: string;
  image: string;
}

const posts: Blog[] = [
  {
    id: 1,
    category: "Hair Care",
    title: "Signs of Damaged Hair",
    desc: "Learn how to identify the early signs of hair damage and what you can do to restore its health.",
    image: "/hair-damage.jpg", // Replace with your assets
  },
  {
    id: 2,
    category: "Anti-Aging",
    title: "Microneedling for Hair Growth",
    desc: "Discover the science behind microneedling and how it stimulates hair follicles for better density.",
    image: "/microneedling.jpg",
  },
  // Add more posts as needed
]


export default function BlogPage() {
  const [search,setSearch] = React.useState("")
  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="min-h-screen text-[#1D423E]">
      {/* HERO SECTION */}
      <section className="relative px-10! mx-auto h-[450px] flex items-center justify-center overflow-hidden bg-white">
          <Image
            src="/images/blog-image.png" 
            alt="Dermatology treatment" 
            height={500}
            width={800}
            className="absolute right-0 top-0 [mask-image:linear-gradient(to_left,black_70%,transparent)]"
          />
        <div className="container mx-auto px-6! lg:px-20! relative z-10">
          <div className="max-w-xl">
            <h4 className="uppercase tracking-widest font-(family-name:--font-viga) text-[16px] font-semibold mb-4">Blogs & Articles</h4>
            <h1 className="text-[30px]  lg:text-[38px] font-(family-name:--font-viga) leading-tight mb-4! mt-4!">
              Expert Dermatologist Tips for Healthy Hair
              <br/>
              and skin
            </h1>
            <p className="text-lg opacity-80! mb-8! font-(family-name:--font-subhead) font-medium">
              Discover the latest hair care tips, treatments, and insights from our dermatology specialists.
            </p>
            <div className="flex gap-6!">
              <button className="bg-[#25544C] text-white px-8! font-(family-name:--font-heading) font-semibold py-3! rounded-md hover:bg-[#1a3d37] transition cursor-pointer">
                Read Featured Article
              </button>
              <button className="flex items-center gap-2! border-2 border-[#25544C] font-(family-name:--font-heading) font-bold px-8! py-3! rounded-md hover:bg-[#25544C]/5 cursor-pointer transition">
                <Instagram size={20} /> Follow Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <div className="flex flex-col">
      <div className="container mx-auto px-6! lg:px-20! mt-8! relative z-20!">
        <div className="bg-[#dce0ea] backdrop-blur-md p-4! rounded-xl shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4!">
          <div className="flex gap-2!">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`px-6! cursor-pointer py-2! rounded-full text-[15px] font-(family-name:--font-poppins) font-medium transition ${
                  cat === "All" ? "bg-[#25544C] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3! top-1/2 -translate-y-1/2 text-[#25544C]" size={20} />
            <input 
              type="text" 
              placeholder="Search blog articles..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10! pr-4! py-2! font-(family-name:--font-poppins) font-medium bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#25544C]/20 outline-none text-sm"
            />
          </div>
        </div>
      </div>

      {/* RECENT BLOGS GRID */}
      <section className="container mx-auto px-6! lg:px-20 py-16!">
        <h2 className="text-3xl font-(family-name:--font-poppins) font-semibold mb-10!">Recent Blogs</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8!">
          
          {/* Main Featured Card (Spans 2 columns) */}
          <div className="lg:col-span-2 group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-80 overflow-hidden">
              <img src="/hairfall-science.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Science" />
              <span className="absolute top-4 left-4 bg-[#C5A67C] text-white text-xs px-3 py-1 rounded-md uppercase tracking-wider">Featured</span>
            </div>
            <div className="p-8!">
              <h3 className="text-3xl font-serif mb-4!">The Science Behind Hairfall</h3>
              <p className="text-gray-600 mb-6!">Learn the main causes of hairfall and how dermatologists recommend treating it with evidence-based solutions.</p>
              <div className="flex items-center justify-between border-t pt-6!">
                <span className="text-sm text-gray-400">March 12 — 5 min read</span>
                <button className="flex items-center gap-!2 font-semibold text-[#25544C] group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Side Column Cards */}
          <div className="flex flex-col gap-8!">
            {filteredPosts.map((post,index) => (
              <div key={index} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-48 overflow-hidden">
                   <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-all" alt={post.title} />
                </div>
                <div className="p-6!">
                  <span className="text-xs font-bold text-[#C5A67C] uppercase tracking-widest">{post.category}</span>
                  <h4 className="text-xl font-serif mt-2! mb-3!">{post.title}</h4>
                  <p className="text-gray-600 mb-6!">{post.desc}</p>
                  <button className="text-sm font-semibold flex items-center gap-1!">Read More <ArrowRight size={14}/></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}