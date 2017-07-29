import React from 'react';
import Default from './Default';
import About from './About';
import Portfolio from './Portfolio';
import Support from './Support';
import Contact from './Contact';
import {
  Route,
  Link
} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import './css/App.css';
const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline'
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical'
    });
  }
  render() {
    return <Layout>
        <Sider breakpoint="lg" trigger={null} collapsible collapsed={this.state.collapsed}>
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -45 600 550">
              <g xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5CCA9" d="M378,156.7c0,0,116.9,318.6-154.9,318.6c-289.3,0-156.9-318.6-156.9-318.6    C96.1,76.1,139.5,34.8,222.6,34.8C296.4,34.8,353.3,80.7,378,156.7z" />
                <circle fill="#2D2B29" cx="309.7" cy="255" r="21.5" />
                <circle fill="#2D2B29" cx="129.2" cy="255" r="21.5" />
                <path fill="#F5CCA9" d="M49.5,229.4c0,0-46.7,4.2-46.7,45.8c0,49,46.7,49,46.7,49L49.5,229.4z" />
                <path fill="#F5CCA9" d="M389,229.4c0,0,46.7,4.2,46.7,45.8c0,49-46.7,49-46.7,49L389,229.4z" />
                <g>
                  <path fill="#2D2B29" d="M49.5,154.6c0,0,53.5-221.2,260.2-129c96.1,42.8,100.1,218.5,100.1,218.5     C312.4,218.8,126.3,191.1,49.5,154.6z" />
                  <path fill="#2D2B29" d="M386.4,232.6l23.5,11.4c0,0,1.7,50.3-8.5,86.5C401.3,330.5,395.9,261,386.4,232.6z" />
                  <path fill="#2D2B29" d="M134.8,158.9l-50.4-12.8c0.6,5.4,42.5,50.7,67.8,64.4C152.2,210.5,140.7,188.4,134.8,158.9z" />
                  <path fill="#2D2B29" d="M211.5,197l-80-21.2c-0.5,4.9,65.8,52.2,93.4,66.8C224.9,242.6,217.4,226.4,211.5,197z" />
                  <path fill="#2D2B29" d="M229.3,191.7l-26,0.9c0,0,22.2,27.5,52.8,45.7C256.1,238.3,240.7,219.2,229.3,191.7z" />
                  <path fill="#2D2B29" d="M364.5,208.8l23-4.2c0,0,3.4,36.4-5.2,73C382.3,277.6,375.3,236.7,364.5,208.8z" />
                  <path fill="#2D2B29" d="M68.1,141.8l-12.9-2.1c-6.6,41.5-28.2,114.9-16.6,203C37.2,342.8,47.7,212.3,68.1,141.8z" />
                </g>
                <g>
                  <g>
                    <g>
                      <path fill="#3D3B39" d="M241.3,295.6l0.7-61.6c0-10.3,7.8-18.7,17.5-18.7h103.9c9.6,0,17.5,8.4,17.5,18.7l-0.7,61.6       c0,10.3-7.8,18.7-17.5,18.7H258.8C249.2,314.3,241.3,305.9,241.3,295.6z M262.7,227.6c-2.8,0-5.2,2.9-5.2,6.4l-0.7,61.6       c0,3.5,2.3,6.4,5.2,6.4h97.2c2.8,0,5.2-2.9,5.2-6.4l0.7-61.6c0-3.5-2.4-6.4-5.2-6.4H262.7z" />
                    </g>
                    <rect x="363.4" y="215.3" fill="#3D3B39" width="17.5" height="14.1" />
                    <circle fill="#3D3B39" cx="380.8" cy="222.4" r="7.1" />
                  </g>
                  <g>
                    <g>
                      <path fill="#3D3B39" d="M180.3,314.3H76.4c-9.6,0-17.5-8.4-17.5-18.7l-0.7-61.6c0-10.3,7.8-18.7,17.5-18.7h103.9       c9.6,0,17.5,8.4,17.5,18.7l0.7,61.6C197.8,305.9,189.9,314.3,180.3,314.3z M79.3,227.6c-2.8,0-5.2,2.9-5.2,6.4l0.7,61.6       c0,3.5,2.4,6.4,5.2,6.4h97.2c2.9,0,5.2-2.9,5.2-6.4l-0.7-61.6c0-3.5-2.4-6.4-5.2-6.4H79.3z" />
                    </g>
                    <rect x="58.3" y="215.3" fill="#3D3B39" width="17.5" height="14.1" />
                    <circle fill="#3D3B39" cx="58.3" cy="222.4" r="7.1" />
                  </g>
                  <rect x="190.6" y="242.2" fill="#3D3B39" width="59.2" height="16.9" />
                </g>
              </g>
            </svg>
          </Link>
          <Menu theme="dark" mode={this.state.mode}>
            <Menu.Item key="1">
              <Link to="/about">
                <Icon type="info-circle" />
              </Link>
              <Link to="/about" className="nav-text">
                About
              </Link>
            </Menu.Item>
            <SubMenu key="2" title={<span>
                  <Icon type="hdd" />
                  <span className="nav-text">Portfolio</span>
                </span>}>
              <Menu.Item key="sub1">
                <Link to="/portfolio/photo">photo</Link>
              </Menu.Item>
              <Menu.Item key="sub2">
                <Link to="/portfolio/project">project</Link>
              </Menu.Item>
              <Menu.Item key="sub3">
                <Link to="/portfolio/art">art</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="3">
              <Link to="/support">
                <Icon type="like" />
              </Link>
              <Link to="/support" className="nav-text">
                Support
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/contact">
                <Icon type="contacts" />
              </Link>
              <Link to="/contact" className="nav-text">
                Contact
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon className="trigger" type={this.state.collapsed ? "menu-unfold" : "menu-fold"} onClick={this.toggle} />
          </Header>
          <Content style={{ margin: "24px 16px", padding: 24, background: "#fff", minHeight: 280 }}>
            <Route exact path="/" component={Default} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/support" component={Support} />
            <Route path="/contact" component={Contact} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            b2pwr ©2017 Powered by Ant Design
          </Footer>
        </Layout>
      </Layout>;
  }
}

export default App;