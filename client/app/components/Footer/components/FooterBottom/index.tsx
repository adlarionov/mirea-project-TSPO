"use client";
import Image from "next/image";
import React from "react";

import Visa from "@/utils/icons/payment-cards/visa.svg";
import MasterCard from "@/utils/icons/payment-cards/mastercard.svg";
import PayPal from "@/utils/icons/payment-cards/paypal.svg";
import ApplePay from "@/utils/icons/payment-cards/applepay.svg";
import GooglePay from "@/utils/icons/payment-cards/googlepay.svg";
import Link from "next/link";

export default function FooterBottom() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="h-[1px] w-full bg-gray-300 mb-6" />
      <div className="flex justify-between items-center flex-col sm:flex-row gap-2 sm:gap-0">
        <p className="text-gray-400 text-sm">
          Shop.co © 2000-{currentYear}, All Rights Reserved
        </p>
        <div className="flex">
          <Link href="/payment/visa">
            <Image src={Visa} alt={Visa} />
          </Link>
          <Link href="/payment/mastercard">
            <Image src={MasterCard} alt={MasterCard} />
          </Link>
          <Link href="/payment/paypal">
            <Image src={PayPal} alt={PayPal} />
          </Link>
          <Link href="/payment/applepay">
            <Image src={ApplePay} alt={ApplePay} />
          </Link>
          <Link href="/payment/googlepay">
            <Image src={GooglePay} alt={GooglePay} />
          </Link>
        </div>
      </div>
    </div>
  );
}
