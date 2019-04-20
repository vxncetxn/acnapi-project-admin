import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  select as d3Select,
  axisBottom,
  axisLeft,
  scaleLinear,
  scaleBand,
  max as d3Max,
  mouse
} from "d3";

const insertLinebreaks = function(d) {
  var el = d3Select(this);
  var words = d3Select(this)
    .text()
    .split(" ");
  el.text("");

  for (var i = 0; i < words.length; i++) {
    var tspan = el.append("tspan").text(words[i]);
    if (i > 0) tspan.attr("x", 0).attr("dy", "15");
  }
};

const findMax = a => {
  if (a.length) {
    let max = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] > max) {
        max = a[i];
      }
    }
    return max;
  } else {
    return null;
  }
};

const findMedian = a => {
  if (a.length) {
    if (a.length % 2) {
      // truthy here means odd (returns value NOT 0)
      return a[Math.floor(a.length / 2)];
    } else {
      // falsy here means even (return value of 0)
      return (a[a.length / 2] + a[a.length / 2 - 1]) / 2;
    }
  } else {
    return 0;
  }
};

const StatisticsComp = ({ user }) => {
  return (
    <div style={{ marginLeft: "4rem", fontSize: "1.6rem" }}>
      Work in Progress!
    </div>
  );
};

export default StatisticsComp;
