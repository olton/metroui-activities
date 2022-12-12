import React, {FC} from "react";
import classNames from "classnames";

import "./Activity.less"

export enum ACTIVITY_STYLE {
    COLOR = "style-color",
    LIGHT = "style-light",
    DEFAULT = "style-dark",
}

export enum ACTIVITY_TYPE {
    RING = "ring",
    METRO = "metro",
    SQUARE = "square",
    CYCLE = "cycle",
    SIMPLE = "simple",
    BARS = "bars",
    ATOM = "atom",
}

interface IActivityProps {
    style: ACTIVITY_STYLE,
    type: ACTIVITY_TYPE,
}

const Activity: FC<IActivityProps> = ({
    style = ACTIVITY_STYLE.DEFAULT,
    type = ACTIVITY_TYPE.SIMPLE
}) => {
    const classes = classNames(
        `activity-type-${type}`,
        `activity-${style}`,
    )
    return (
        <div className={classes}>
            {type === ACTIVITY_TYPE.SIMPLE && (
                <svg className="circular">
                    <circle className="path" cx="32" cy="32" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
                </svg>
            )}

            {type === ACTIVITY_TYPE.CYCLE && (
                <div className="activity-element-circle"></div>
            )}

            {(type === ACTIVITY_TYPE.METRO) && (
                <>
                    <div className="activity-element-circle"></div>
                    <div className="activity-element-circle"></div>
                    <div className="activity-element-circle"></div>
                    <div className="activity-element-circle"></div>
                    <div className="activity-element-circle"></div>
                </>
            )}

            {(type === ACTIVITY_TYPE.RING) && (
                <>
                    <div className="activity-element-wrap">
                        <div className="activity-element-circle"></div>
                    </div>
                    <div className="activity-element-wrap">
                        <div className="activity-element-circle"></div>
                    </div>
                    <div className="activity-element-wrap">
                        <div className="activity-element-circle"></div>
                    </div>
                    <div className="activity-element-wrap">
                        <div className="activity-element-circle"></div>
                    </div>
                    <div className="activity-element-wrap">
                        <div className="activity-element-circle"></div>
                    </div>
                </>
            )}

            {type === ACTIVITY_TYPE.SQUARE && (
                <>
                    <div className="activity-element-square"></div>
                    <div className="activity-element-square"></div>
                    <div className="activity-element-square"></div>
                    <div className="activity-element-square"></div>
                </>
            )}

            {type === ACTIVITY_TYPE.ATOM && (
                <div className="activity-wrapper">
                    <div className="activity-element-electron"></div>
                    <div className="activity-element-electron"></div>
                    <div className="activity-element-electron"></div>
                </div>
            )}

            {type === ACTIVITY_TYPE.BARS && (
                <div className="activity-wrapper">
                    <span className="activity-element-bar"></span>
                    <span className="activity-element-bar"></span>
                    <span className="activity-element-bar"></span>
                    <span className="activity-element-bar"></span>
                    <span className="activity-element-bar"></span>
                    <span className="activity-element-bar"></span>
                </div>
            )}
        </div>
    )
}

export default Activity