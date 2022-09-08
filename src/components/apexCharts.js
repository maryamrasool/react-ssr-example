import React, { Component } from "react";
export default class ApexCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "apexchart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      ChartComponent: null,
    };
  }

  async componentDidMount() {
    if (typeof document !== undefined) {
      const ApexCharts = await import("react-apexcharts");
      this.setState({ ChartComponent: ApexCharts });
    }
  }

  render() {
    const Chart = this.state.ChartComponent;
    return Chart ? (
      <Chart.default
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width={500}
        height={320}
      />
    ) : null;
  }
}
