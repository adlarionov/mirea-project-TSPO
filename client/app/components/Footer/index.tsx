import React from "react";
import Newsletter from "./components/Newsletter";
import { micra } from "@/utils/font";
import classNames from "classnames";
import FooterColumn from "./components/FooterColumn";
import FooterIcons from "./components/FooterIcons";

import Facebook from "@/utils/icons/footer-icons/facebook.svg";
import Instagram from "@/utils/icons/footer-icons/instagram.svg";
import Github from "@/utils/icons/footer-icons/github.svg";
import Twitter from "@/utils/icons/footer-icons/twitter.svg";
import FooterBottom from "./components/FooterBottom";

export default function Footer() {
  return (
    <div className="w-full px-4 sm:px-24 py-36 sm:py-28 bg-gray-100 relative">
      <Newsletter />
      <div className="flex flex-col sm:flex-row mb-12">
        <div className="flex justify-between flex-col gap-4 sm:w-1/5 mb-4 sm:mb-0">
          <h1 className={classNames(micra.className, "text-3xl sm:text-2xl")}>
            shop.co
          </h1>
          <p className="text-sm text-gray-400">
            У нас есть одежда, которая соответствует вашему стилю и которую вы с
            гордостью носите. От женщин к мужчинам.
          </p>
          <FooterIcons
            icons={[
              { icon: Facebook, link: "facebook" },
              { icon: Instagram, link: "instagram" },
              { icon: Github, link: "github" },
              { icon: Twitter, link: "twitter" },
            ]}
          />
        </div>
        <div className="grid gap-4 grid-cols-2 sm:gap-28 sm:grid-cols-4 sm:w-4/5">
          <FooterColumn
            items={[
              { description: "О нас", link: "/company/about" },
              { description: "Особенности", link: "/company/features" },
              { description: "Работы", link: "/company/works" },
              { description: "Карьера", link: "/company/career" },
            ]}
            title="Компания"
          />
          <FooterColumn
            items={[
              {
                description: "Помощь Покупателей",
                link: "/help/customer_support",
              },
              {
                description: "Детали Доставки",
                link: "/help/delivery_details",
              },
              {
                description: "Условия Использования",
                link: "/help/terms_and_conditions",
              },
              {
                description: "Политика Приватности",
                link: "/help/privacy_policy",
              },
            ]}
            title="Помощь"
          />
          <FooterColumn
            items={[
              { description: "Аккаунт", link: "/faq/account" },
              {
                description: "Условия Доставки",
                link: "/faq/manage_deliveries",
              },
              { description: "Заказы", link: "/faq/orders" },
              { description: "Оплата", link: "/faq/payments" },
            ]}
            title="FAQ"
          />
          <FooterColumn
            items={[
              {
                description: "Бесплатные Книги",
                link: "/resources/free_ebooks",
              },
              {
                description: "Инструменты Разработки",
                link: "/resources/dev_tools",
              },
              { description: "Как Вести Блог", link: "/resources/how_to_blog" },
              {
                description: "Youtube Плейлист",
                link: "/resources/youtube_playlist",
              },
            ]}
            title="Ресурсы"
          />
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}
