import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class PageTransition extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        timeout: PropTypes.number,
    };

    static defaultProps = {
        timeout: 500,
    };

    constructor(...props) {
        super(...props);

        const {
            children,
        } = props;

        this.state = {
            child1: children,
            child2: null,
            nextChild: 2,
            overlayState: 'hidden',
        };

        this.getRef = this.getRef.bind(this);
        this.transition = this.transition.bind(this);
    }

    componentDidMount() {
        const {
            children,
        } = this.props;

        this.transite(children);
    }

    componentWillReceiveProps(nextProps) {

    }

    getRef(ref) {
        let child = this[ref];

        if (child && child.getWrappedInstance) {
            child = child.getWrappedInstance();
        }

        return child;
    }

    transition(nextChild) {
        return new Promise((transitionDone, transitionFailed) => {
            const {
                nextChild: nextChildNum,
            } = this.child;

            this.state[`child${nextChildNum}`] = nextChild;

            this.forceUpdate(() => {
                const prevChild = this.getRef(
                    `child${nextChild === 1 ? 2 : 1}`
                );

                const newChild = this.getRef(`child${nextChildNum}`);
                const prevChildDom = ReactDOM.findDOMNode(prevChild);
                const newChildDom = ReactDOM.findDOMNode(newChild);

                const {
                    data,
                    timeout,
                    transitionAction,
                } = this.props;

                const willStart = () => {
                    if (newChild.onTransitionWillStart) {
                        return (
                            newChild.onTransitionWillStart(data)
                                || Promise.resolve()
                        );
                    }
                    if (prevChild && prevChild.onTransitionLeaveWillStart) {
                        return (
                            prevChild.onTransitionLeaveWillStart(data)
                                || Promise.resolve()
                        );
                    }

                    return Promise.resolve();
                };

                const start = () => {
                    if (newChildDom.classList.contains('transition-item')) {
                        newChildDom.classList.add('transition-appear');
                        if (this.hasTransitionAction()) {
                            newChildDom.classList.add(
                                `transition-${transitionAction}`
                            );
                        }
                        newChildDom.offsetHeight;
                        if (newChild.transitionManuallyStart) {
                            return (newChild.transitionManuallyStart(data, start))
                                || Promise.resolve()
                        };
                    }
                }


            });
        });
    }

    render() {
        const {
            child1,
            child2,
            overlayState,
        } = this.state;

        return (
            <div className="transition-wrapper">
                <TransitionOverlay
                    state={overlayState}
                />
                {React.Children.map(child1, c => (
                    React.cloneElement(c, {
                        ref: 'child1',
                    })
                ))}
                {React.Children.map(child2, c => (
                    React.cloneElement(c, {
                        ref: 'child2',
                    })
                ))}
            </div>
        );
    }
}

export default PageTransition;
