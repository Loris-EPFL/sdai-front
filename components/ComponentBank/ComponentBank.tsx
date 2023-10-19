import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface HrefAndMsgProps {
  href: string;
  text: string;
  target: string;
}
export function HeaderTitle(props: HrefAndMsgProps) {
  return (
    <Link
      className="hover:text-primary3 text-gray-100 duration-200 z-50"
      href={props.href}
      rel="noopener"
      target="porps.target"
    >
      {props.text}
    </Link>
  );
}

interface HeaderButton {
  href: string;
  message: string;
  target: string;
}
export function HeaderButton(props: HrefAndMsgProps) {
  return (
    <Link
      className="text-white text-opacity-80 flex items-center justify-center hover:bg-opacity-25 bg-black bg-opacity-0 duration-300 py-1 px-4 rounded-xl z-50"
      href={props.href}
      rel="noopener"
      target={props.target}
    >
      {props.text}
    </Link>
  );
}

interface hrefAndTitleProps {
  href: string;
  title: string;
  target: string;
}
export function FooterTitle(props: hrefAndTitleProps) {
  return (
    <Link
      className="hover:text-primary3 duration-200 z-50"
      href={props.href}
      rel="noopener"
      target="props.target"
    >
      {props.title}
    </Link>
  );
}

interface HeroButton {
  href: string;
  title: string;
  target: string;
}

export function HeroButton(props: HrefAndMsgProps) {
  return (
    <div className="w-full h-full">
      <Link href={props.href} target={props.target} rel="noopener">
        <div className="text-black hover:bg-primary7 bg-primary6 duration-300 py-4 px-6 rounded-2xl relative">
          <span className="absolute animate-ping -top-2 -left-2 h-5 w-5 rounded-full bg-primary8 opacity-75"></span>
          <span className="absolute -top-1 -left-1 rounded-full h-3 w-3 bg-primary8"></span>
          {props.text}
        </div>
      </Link>
    </div>
  );
}

interface FullyIntegratedCardProps {
  title: string;
  text: string;
}

export function FullyIntegratedCard(props: FullyIntegratedCardProps) {
  return (
    <div className="flex flex-col items-center justify-start rounded-2xl bg-primary3 bg-opacity-30 p-5 w-full md:w-[420px] h-full gap-3 text-center">
      <div className="text-lg md:text-xl font-bold">{props.title}</div>
      <div className="text-m text-gray-200">{props.text}</div>
    </div>
  );
}

interface FooterSocialProps {
  href: string;
  logo: StaticImageData;
  alt: string;
}

export function FooterSocial(props: FooterSocialProps) {
  return (
    <div className="text-red-200 fill-current">
      <Link
        href={props.href}
        target="blank"
        rel="noopener"
        className="hover:opacity-40 duration-300 "
      >
        <Image src={props.logo} alt={props.alt} className="" />
      </Link>
    </div>
  );
}