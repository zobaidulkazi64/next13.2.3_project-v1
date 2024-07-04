"use client"; // Ensures this component is treated as a Client Component

import React, { Component } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

type Props = {
  spec: Record<string, any>;
};

class ReactSwagger extends Component<Props> {
  render() {
    return <SwaggerUI spec={this.props.spec} />;
  }
}

export default ReactSwagger;
