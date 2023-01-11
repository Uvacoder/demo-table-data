import CalendarExample from "./components/calendar";
import QuillEditorExample from "./components/quill";
import DataTableExample from "./components/dataTables";
import DataTableExampleV8 from "./components/dataTablesV8";
import KanbanExample from "./components/kanban";
import WizardExample from "./components/wizard";
import BarChart from "./components/charts/barChart";
import BubbleChart from "./components/charts/bubbleChart";
import DonutChart from "./components/charts/donutChart";
import LineBarChart from "./components/charts/lineBarChart";
import LineChart from "./components/charts/lineChart";
import PieChart from "./components/charts/pieChart";
import PolarChart from "./components/charts/polarChart";
import RadarChart from "./components/charts/radarChart";
import Dropzone from "./components/Dropzone";
import MapComponent from "./components/map";
import MiniCalendar from "./components/MiniCalendar";

import Card from "./components/card/Card.js";
import {
  lineChartDataOverallRevenue,
  lineChartOptionsOverallRevenue,
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
  // barChartOptionsCharts1,
  barChartOptionsCharts2,
  pieChartOptions,
  pieChartData,
  // barChartDataCharts1,
  barChartDataCharts2,
  bubbleChartData,
  bubbleChartOptions,
  donutChartDataCharts1,
  donutChartOptionsCharts1,
  lineBarChartData,
  lineBarChartOptions,
  // lineChartDataCharts1,
  lineChartDataCharts2,
  // lineChartOptionsCharts1,
  lineChartOptionsCharts2,
  // pieChartDataCharts1,
  // pieChartOptionsCharts1,
  polarChartDataCharts,
  polarChartOptionsCharts,
  radarChartDataCharts,
  radarChartOptionsCharts
} from "./components/charts/chartData.js";
import tableData1 from "./components/tableData.json";
import tableDataV81 from "./variables/tableDataTopCreators";
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Showcase from "./components/Showcase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-quill/dist/quill.snow.css"; // ES6
import "./styles.css";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import { MdOutlineCloudUpload } from "react-icons/md";

export default function App() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const brand = useColorModeValue("brand.500", "brand.400");
  const columnsData1 = [
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Artworks",
      accessor: "artworks"
    },
    {
      Header: "Rating",
      accessor: "rating"
    }
  ];
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/calendar">
              <CalendarExample />
            </Route>
            <Route path="/data-tables">
              <Card maxWidth="700px" mx="auto" mt="30px">
                <DataTableExample
                  tableData={tableData1}
                  columnsData={columnsData1}
                />
              </Card>
            </Route>
            <Route path="/data-tables-v8">
              <Showcase>
                <Card maxWidth="600px" mx="auto" mt="30px">
                  <DataTableExampleV8 tableData={tableDataV81} />
                </Card>
              </Showcase>
            </Route>
            <Route path="/kanban">
              <Showcase>
                <KanbanExample />
              </Showcase>
            </Route>
            <Route path="/map">
              <MapComponent />
            </Route>
            <Route path="/quill-editor">
              <Box maxWidth="450px" mx="auto" mt="30px">
                <QuillEditorExample />
              </Box>
            </Route>
            <Route path="/line-chart-1">
              <LineChart
                chartData={lineChartDataOverallRevenue}
                chartOptions={lineChartOptionsOverallRevenue}
              />
            </Route>
            <Route path="/line-chart-2">
              <LineChart
                chartData={lineChartDataCharts2}
                chartOptions={lineChartOptionsCharts2}
              />
            </Route>
            <Route path="/bar-chart-1">
              <Showcase>
                <Card
                  mx="auto"
                  mt="50px"
                  align="center"
                  direction="column"
                  w="400px"
                >
                  <Flex
                    justify="space-between"
                    align="start"
                    px="10px"
                    pt="5px"
                  >
                    <Flex flexDirection="column" align="start" me="20px">
                      <Text
                        color="secondaryGray.600"
                        fontSize="sm"
                        fontWeight="500"
                      >
                        Daily Traffic
                      </Text>
                      <Flex align="end">
                        <Text
                          color={textColor}
                          fontSize="34px"
                          fontWeight="700"
                          lineHeight="100%"
                        >
                          2.579
                        </Text>
                        <Text
                          ms="6px"
                          color="secondaryGray.600"
                          fontSize="sm"
                          fontWeight="500"
                        >
                          Visitors
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex align="center">
                      <Icon as={RiArrowUpSFill} color="green.500" />
                      <Text color="green.500" fontSize="sm" fontWeight="700">
                        +2.45%
                      </Text>
                    </Flex>
                  </Flex>
                  <Box h="240px" mt="auto">
                    <BarChart
                      chartData={barChartDataDailyTraffic}
                      chartOptions={barChartOptionsDailyTraffic}
                    />
                  </Box>
                </Card>
              </Showcase>
            </Route>
            <Route path="/bar-chart-2">
              <BarChart
                chartData={barChartDataCharts2}
                chartOptions={barChartOptionsCharts2}
              />
            </Route>
            <Route path="/dropzone">
              <Showcase>
                <Card p="30px" w="400px" mx="auto" mt="50px">
                  <Text
                    color={textColor}
                    fontSize="2xl"
                    fontWeight="700"
                    mb="20px"
                  >
                    Media
                  </Text>
                  <Dropzone
                    content={
                      <Box>
                        <Icon
                          as={MdOutlineCloudUpload}
                          w="80px"
                          h="80px"
                          color={textColor}
                        />
                        <Text
                          mx="auto"
                          mb="12px"
                          fontSize="lg"
                          fontWeight="700"
                          whiteSpace="pre-wrap"
                          color={textColor}
                        >
                          Drop your files here, or{" "}
                          <Text
                            as="span"
                            fontSize="lg"
                            fontWeight="700"
                            color={brand}
                          >
                            browse
                          </Text>
                        </Text>
                        <Text
                          fontSize="sm"
                          fontWeight="500"
                          color="secondaryGray.500"
                        >
                          PNG, JPG and GIF files are allowed
                        </Text>
                      </Box>
                    }
                  />
                </Card>
              </Showcase>
            </Route>
            <Route path="/mixed-chart">
              <LineBarChart
                chartData={lineBarChartData}
                chartOptions={lineBarChartOptions}
              />
            </Route>
            <Route path="/bubble-chart">
              <BubbleChart
                chartData={bubbleChartData}
                chartOptions={bubbleChartOptions}
              />
            </Route>
            <Route path="/donut-chart">
              <DonutChart
                chartData={donutChartDataCharts1}
                chartOptions={donutChartOptionsCharts1}
              />
            </Route>
            <Route path="/pie-chart">
              <PieChart
                chartData={pieChartData}
                chartOptions={pieChartOptions}
              />
            </Route>
            <Route path="/radar-chart">
              <RadarChart
                chartData={radarChartDataCharts}
                chartOptions={radarChartOptionsCharts}
              />
            </Route>
            <Route path="/polar-chart">
              <PolarChart
                chartData={polarChartDataCharts}
                chartOptions={polarChartOptionsCharts}
              />
            </Route>
            <Route path="/wizard">
              <WizardExample />
            </Route>
            <Route path="/mini-calendar">
              <Showcase>
                <MiniCalendar />
              </Showcase>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
