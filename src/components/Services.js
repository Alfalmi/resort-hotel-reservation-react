import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Occaecat anim reprehenderit aute magna consectetur duis irure aliqua ea proident adipisicing culpa sunt.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Ut voluptate ipsum cupidatat magna pariatur consectetur exercitation minim occaecat deserunt.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Esse nostrud aliquip velit laborum.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Reprehenderit occaecat ullamco Lorem adipisicing duis pariatur sint proident nostrud nostrud nostrud.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
            {this.state.services.map((item, index) => {
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            })}
        </div>
      </section>
    );
  }
}
