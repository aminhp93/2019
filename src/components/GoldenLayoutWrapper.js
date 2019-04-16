
import React from 'react';
import ReactDOM from 'react-dom';
import GoldenLayout from 'golden-layout';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Self from './Self';
import Header from './Header';
import Menu from './Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import layoutConfig from '../layoutConfig';
import dataStorage from '../dataStorage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as checkFilterReady from '../actions/checkFilterReady.actions';

window.React = React;
window.ReactDOM = ReactDOM;

const dicComponent = {
    Self: Self
};
class GoldenLayoutWrapper extends React.Component {
    constructor(props) {
        super(props);
        dataStorage.goldenLayout = this;
        this.goldenLayout = null;
        this.state = {

        }
        this.initGoldenLayout = this.initGoldenLayout.bind(this);
    }

    wrapComponent(Component, store) {
        class Wrapped extends React.Component {
            ref(dom) {
                if (dom) dom.react = this;
            }

            render() {
                return (
                    <Provider store={store}>
                        <div className={'wrapComponent'} ref={this.ref.bind(this)}>
                            <Component {...this.props} />
                        </div>
                    </Provider>
                );
            }
        }
        return Wrapped;
    }

    initLayoutConfig(lst = []) {
        Array.isArray(lst) && lst.map(item => {
            if (item.content) {
                this.initLayoutConfig(item.content);
            }
            if (item.type === 'component') {
                this.registerComponent(item);
            }
        });
    }

    initGoldenLayout(mode) {
        const that = this;
        let layout = layoutConfig.getDefaultLayout();
        const config = {
            dimensions: {
                // headerHeight: 32,
                // borderWidth: 8,
                // minItemHeight: 192,
                // minItemWidth: 300
            },
            content: layout
        }


        if (this.goldenLayout) this.goldenLayout.destroy();

        // const a = window.location.href.match(/(gl-window=)(.*)/)
        // if (a && a.length && a[2]) {
        //     console.log(dataStorage)
        //     localStorage.setItem(a[2], JSON.stringify(layout[0]))
        // }

        this.goldenLayout = new GoldenLayout(config, this.layout);
        this.initLayoutConfig([config]);
        /// Callback for every created stack
        this.goldenLayout.on('stackCreated', (stack) => {
            console.log(123)
        });

        this.goldenLayout.on('tabCreated', (tabContainer) => {
            console.log(123)
        });

        this.goldenLayout.on('componentCreated', com => {
            console.log(123)
        })
        this.goldenLayout.on('itemDestroyed', (event) => {
            console.log(event)
        });
        this.goldenLayout.on('itemCreated', (event) => {
            console.log(123)
        });

        this.goldenLayout.on('stateChanged', (event) => {
            console.log(event)
        });

        this.goldenLayout.on('rowCreated', (event) => {
            console.log(123)
        });
        this.goldenLayout.on('columnCreated', (event) => {
            console.log(123)
        });
        this.goldenLayout.on('selectionChanged', (event) => {
            console.log(123)
        });
        this.goldenLayout.on('windowOpened', (event) => {
            that.goldenLayout.eventHub.emit('sayHi', { name: dataStorage });
            console.log(event)
        });
        this.goldenLayout.on('windowClosed', (event) => {
            console.log(event)
        });
        if (this.goldenLayout.config && this.goldenLayout.config.content && this.goldenLayout.config.content.length === 1) {
            if (this.goldenLayout.config.content[0].type === 'component') {
                this.goldenLayout.eventHub.on('sayHi', function (user) {
                    console.log(user.name)
                });
                // setTimeout(() => {
                //     this.registerComponent(this.goldenLayout.config.content[0])
                // }, 3000)
            }
        }

        this.goldenLayout.init();

        window.addEventListener('resize', () => {
            this.goldenLayout.updateSize();
        })
    }

    registerComponent(item) {
        if (!this.goldenLayout.existed) this.goldenLayout.existed = {};
        if (this.goldenLayout.existed[item.component]) return;
        this.goldenLayout.existed[item.component] = true;
        this.goldenLayout.registerComponent(item.component,
            this.wrapComponent(dicComponent[item.component], this.context.store)
        )
    }

    addComponentToStack(index, state = {}) {
        let title = ''
        switch (index) {
            default:
                title = index
                break;
        }
        var newItemConfig = {
            'type': 'component',
            'component': index,
            'componentName': 'lm-react-component',
            'isClosable': true,
            'reorderEnabled': true,
            'title': title,
            'componentState': state
        };
        if (index === 'DailyWatchlist') {
            newItemConfig.width = '200px'
        }
        let stack = this.goldenLayout.root.getItemsByType('stack');
        if (!stack.length) {
            this.goldenLayout.root.addChild(newItemConfig);
        } else {
            let maxH = 0;
            let maxW = 0;
            let stackParent = null;
            for (let i = 0; i < stack.length; i++) {
                const dom = stack[i].element[0];
                if (dom.clientWidth > maxW) {
                    maxW = dom.clientWidth;
                    maxH = dom.clientHeight;
                    stackParent = stack[i];
                } else if (dom.clientWidth === maxW) {
                    if (dom.clientHeight > maxH) {
                        stackParent = stack[i];
                    }
                }
            }
            stackParent.addChild(newItemConfig)
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    <Menu />
                    <div className='goldenLayout' ref={dom => this.layout = dom} />
                </div>

            </MuiThemeProvider>
        );
    }

    componentDidMount() {
        this.initGoldenLayout();
    }
}

GoldenLayoutWrapper.contextTypes = {
    store: PropTypes.object.isRequired
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(checkFilterReady, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(GoldenLayoutWrapper)
