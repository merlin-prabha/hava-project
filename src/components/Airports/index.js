import {Component} from "react"

import {
    Button,
    defaultTheme,
    Provider,
    Cell, Column, Row, TableView, TableBody, TableHeader
  } from '@adobe/react-spectrum';
import "./index.css"
import Header from "../Header"
import Dashboard from "../Dashboard";
import Details from "../Details";

let columns = [
    { name: 'All Airports', uid: 'all' },
    { name: 'Country', uid: 'country' },
    { name: 'Code', uid: 'code' },
    { name: 'Terminals', uid: 'terminals' }
  ];
  
  let rows = [
    {
      id: 1,
      all: 'Indira Gandhi International Airport',
      country: 'India',
      code: 'DEL',
      terminals: '3'
    },
    {
        id: 2,
        all: 'Dubai International Airport',
        country: 'UAE',
        code: 'DXB',
        terminals: '5'
    },
    {
      id: 3,
      all: 'Heathrow Airport',
        country: 'England',
        code: 'LHR',
        terminals: '6'
    },
    {
      id: 4,
      all: 'Istanbul Airport',
        country: 'Turkey',
        code: 'IST',
        terminals: '3'
    },
    {
        id: 5,
        all: 'Rajiv Gandhi International Airport',
          country: 'Texas',
          code: 'DFW',
          terminals: '14'
      }
  ];
  
class Airports extends Component {
    state = {isDetailButtonClicked: false}

    onClickCell = () => {
        this.setState({isDetailButtonClicked: true})
    }

    renderAirportContainer = () => (
        <div className="airport-container">
            <Provider theme={defaultTheme} colorScheme="light" backgroundColor="gray-75" padding="size-700">
                <div className="heading-button-container">
                    <h1 className="airport-heading">Airports</h1>                
                    <Button variant="primary" style="fill" padding="size-1600">+ Add new</Button>
                </div>
                <div className="table">
                    <TableView
                        aria-label="Example table with dynamic content"
                        width="size-30000"
                        selectionMode="multiple"
                        onAction={this.onClickCell}
                        >
                        <TableHeader columns={columns}>
                            {(column) => (
                            <Column
                                key={column.uid}
                                align={column.uid === 'all' ? 'start' : 'end'}
                                className="table-text"
                            >
                                {column.name}
                            </Column>
                            )}
                        </TableHeader>
                        
                        <TableBody items={rows}>
                            {(item) => (                           
                            <Row>                               
                                {(columnKey) => <Cell>{item[columnKey]}</Cell>}                              
                            </Row>                         
                            )}
                        </TableBody>                        
                    </TableView>                   
                </div>
            </Provider>      
        </div>
    )

    render() {
        const {isDetailButtonClicked} = this.state
        return (
            <div>
                <Header />
                <div className="home-container">
                    <div className="dashboard">                    
                        <Dashboard />
                    </div>
                    <div className="airport">
                        {isDetailButtonClicked ? <Details /> : this.renderAirportContainer()}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Airports 