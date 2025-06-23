"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Overview from "./Overview/page";

import Chart from "./Chart/page";
import Sales from "./Sales/page";


export default function page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white border-b px-4 py-2 flex items-center justify-between fixed w-full z-[9]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
              AK
            </div>
            <span className="font-medium text-sm text-gray-900 hidden sm:block">
              Alicia Koch
            </span>
          </div>

          <nav className="hidden md:flex gap-10 text-sm">
            <a href="#" className="font-medium text-black">
              Overview
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              Customers
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              Products
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              Settings
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-3 py-1.5 rounded-md border border-gray-300 text-sm focus:outline-none"
            />
            <svg
              className="absolute top-[10px] left-[10px] h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
            U
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t md:hidden">
            <nav className="flex flex-col p-4 gap-2 text-sm">
              <a href="#" className="font-medium text-black">
                Overview
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                Customers
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                Products
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                Settings
              </a>
            </nav>
          </div>
        )}
      </header>
      <div className="container px-5 pt-15 pb-10">
        <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center space-x-2 flex-wrap">
            <Overview />
            <div className="mt-[10px] sm:mt-0">
              <Button className="hover:bg-gray-300 hover:text-gray-900 transition-colors cursor-pointer">
                <MdOutlineFileDownload />
                Download
              </Button>
            </div>
          </div>
        </div>
        <Tabs
          orientation="vertical"
          defaultValue="overview"
          className="space-y-4"
        >
          <div className="w-full overflow-x-auto pb-2">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-muted-foreground h-4 w-4"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-muted-foreground text-xs">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Subscriptions
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-muted-foreground h-4 w-4"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-muted-foreground text-xs">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-muted-foreground h-4 w-4"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-muted-foreground text-xs">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-muted-foreground h-4 w-4"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-muted-foreground text-xs">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
              <div className="col-span-1 lg:col-span-4">
                <Chart />
              </div>
              <Card className="col-span-1 lg:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>OM</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-1 flex-wrap items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm leading-none font-medium">
                            Olivia Martin
                          </p>
                          <p className="text-muted-foreground text-sm">
                            olivia.martin@email.com
                          </p>
                        </div>
                        <div className="font-medium">+$1,999.00</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                        <AvatarImage src="/avatars/02.png" alt="Avatar" />
                        <AvatarFallback>JL</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-1 flex-wrap items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm leading-none font-medium">
                            Jackson Lee
                          </p>
                          <p className="text-muted-foreground text-sm">
                            jackson.lee@email.com
                          </p>
                        </div>
                        <div className="font-medium">+$39.00</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatars/03.png" alt="Avatar" />
                        <AvatarFallback>IN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-1 flex-wrap items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm leading-none font-medium">
                            Isabella Nguyen
                          </p>
                          <p className="text-muted-foreground text-sm">
                            isabella.nguyen@email.com
                          </p>
                        </div>
                        <div className="font-medium">+$299.00</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatars/04.png" alt="Avatar" />
                        <AvatarFallback>WK</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-1 flex-wrap items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm leading-none font-medium">
                            William Kim
                          </p>
                          <p className="text-muted-foreground text-sm">
                            will@email.com
                          </p>
                        </div>
                        <div className="font-medium">+$99.00</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatars/05.png" alt="Avatar" />
                        <AvatarFallback>SD</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-1 flex-wrap items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm leading-none font-medium">
                            Sofia Davis
                          </p>
                          <p className="text-muted-foreground text-sm">
                            sofia.davis@email.com
                          </p>
                        </div>
                        <div className="font-medium">+$39.00</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Chart />
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Sales />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
