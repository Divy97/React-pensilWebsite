import React from "react";
import "./que.css";

import $ from "jquery";

const Que = () => {
  $(function () {
    function setHeight() {
      $(".response").each(function (index, element) {
        var target = $(element);
        target.removeClass("fixed-height");
        var height = target.innerHeight();
        target.attr("data-height", height).addClass("fixed-height");
      });
    }

    $("input[name=question]").on("change", function () {
      $("p.response").removeAttr("style");

      var target = $(this).next().next();
      target.height(target.attr("data-height"));
    });

    setHeight();
  });
  return (
    <section className="que">
      <h1 className="queText">Frequently Asked Questions</h1>
      <input className="animate" type="radio" name="question" id="q1" />
      <label className="animate" for="q1">
        Q: What is Lorem Ipsum?
      </label>
      <p className="response animate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
        repudiandae. Voluptatem at quaerat obcaecati consequuntur nesciunt, quia
        tenetur enim adipisci deserunt reiciendis molestiae ipsam dolores.
      </p>

      <input className="animate" type="radio" name="question" id="q2" />
      <label className="animate" for="q2">
        Q: Why do we use it?
      </label>
      <p className="response animate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
        repudiandae. Voluptatem at quaerat obcaecati consequuntur nesciunt, quia
        tenetur enim adipisci deserunt reiciendis molestiae ipsam dolores.
      </p>

      <input className="animate" type="radio" name="question" id="q3" />
      <label className="animate" for="q3">
        Q: Where does it come for?
      </label>
      <p className="response animate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
        repudiandae. Voluptatem at quaerat obcaecati consequuntur nesciunt, quia
        tenetur enim adipisci deserunt reiciendis molestiae ipsam dolores.
      </p>

      <input className="animate" type="radio" name="question" id="q4" />
      <label className="animate" for="q4">
        Q: Where can i get some?
      </label>
      <p className="response animate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
        repudiandae. Voluptatem at quaerat obcaecati consequuntur nesciunt, quia
        tenetur enim adipisci deserunt reiciendis molestiae ipsam dolores.
      </p>
    </section>
  );
};

export default Que;
