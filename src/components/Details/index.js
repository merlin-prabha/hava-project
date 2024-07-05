import {Component} from "react"
import {Breadcrumbs, Item,defaultTheme, Provider, TabList, Button, Tabs, TextField,ComboBox,
    ActionButton, ButtonGroup, Content, Dialog, DialogTrigger, Divider, Heading, Text, Switch
} from '@adobe/react-spectrum'
import { BsThreeDots } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import "./index.css"
import Header from "../Header"
import Dashboard from "../Dashboard";

const terminalDetails = [
    {
        title: "Terminal 1",
        id: 1
    },
    {
        title: "Terminal 2",
        id: 2
    }
]

class Details extends Component {
    renderTerminalCard = (each) => {
        const {id, title} = each
        return (
        <div className="terminal-card">
            <div className="img-content-container">
                <img src="https://res.cloudinary.com/dksovm4dg/image/upload/v1720162801/Image_foz5nt.png" alt="terminal" />
                <div className="content-container">
                    <div className="heading-icon-container">
                        <h1>{title}</h1>
                        <BsThreeDots className="three-dot-icon" />
                    </div>
                    <p className="terminal-description">Optional metadata sholud be two lines</p>
                </div>
            </div>
        </div>
    )}

    renderDetails = () => (
        <Provider theme={defaultTheme} colorScheme="light" backgroundColor="gray-75">
            <Breadcrumbs size="L">
                <Item key="home">Airports</Item>
                <Item key="trendy">Indira Gandhi International Airport</Item>
            </Breadcrumbs>
            <h1 className="main-heading">Indira Gandhi International Airport</h1>
            <Tabs aria-label="History of Ancient Rome">
                <TabList>
                    <Item key="terminals">Terminals</Item>
                    <Item key="transport">Transport</Item>
                    <Item key="cdetails">Contack details</Item>
                </TabList>
            </Tabs>
            <div className="terminals-card-add-button">
                {terminalDetails.map(each => (this.renderTerminalCard(each)))}
                <Button variant="primary" style="outline" padding="size-1600">+ Add Terminal</Button>
            </div>
            <p className="services-heading">Services</p>
            <p>Lost & found</p>
            <hr className="hr-line" />
            <div className="service-container">
                <div className="service-details-container">
                    <TextField label="Service Name" defaultValue="Lost & found" />
                    <ComboBox label="Category" defaultInputValue="option 1">
                        <Item key="option 1">option 1</Item>
                        <Item key="option 2">option 2</Item>
                        <Item key="option 3">option 3</Item>
                    </ComboBox>
                    <ComboBox label="Sub Category" defaultInputValue="option 1">
                        <Item key="option 1">option 1</Item>
                        <Item key="option 2">option 2</Item>
                        <Item key="option 3">option 3</Item>
                    </ComboBox>
                    <DialogTrigger>
                        <ActionButton variant="secondary" style="fill">
                            <FiUpload />
                            upload image
                        </ActionButton>
                        {(close) => (
                            <Dialog>
                            <Heading>Terminal Title</Heading>
                            <Divider />
                            <Content>
                                <Text>
                                Description
                                </Text>
                            </Content>
                            <ButtonGroup>
                                <Button variant="secondary" onPress={close}>
                                Cancel
                                </Button>
                                <Button variant="primary" style="outline" onPress={close}>
                                Continue
                                </Button>
                            </ButtonGroup>
                            </Dialog>
                        )}
                    </DialogTrigger>
                    <Switch>Show image</Switch>
                    <TextField label="Description" width="size-3600" maxWidth="100%" defaultValue="type here" />
                </div>
                <Button variant="primary" style="fill" padding="size-1600">Save</Button>
            </div>
            <p>Lounge</p>
            <hr className="hr-line" />
            <p>Money Exchange</p>
            <hr className="hr-line" />
        </Provider>   
        
)

    render() {
        return (
            <div>
                <Header />
                <div className="detail-container">
                    <div className="detail-dashboard">                    
                        <Dashboard />
                    </div>
                    <div className="detail-airport">
                        {this.renderDetails()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Details