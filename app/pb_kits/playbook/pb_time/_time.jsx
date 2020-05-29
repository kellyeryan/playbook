/* @flow */

import React from "react";
import DateTime from "../pb_kit/dateTime.js";
import classnames from "classnames";

import { buildAriaProps, buildCss, buildDataProps } from "../utilities/props";

import { Body, Icon, Title } from "../";

type TimeProps = {
  aria?: object,
  className?: String,
  data?: object,
  id?: String,
  size: "lg" | "sm" | "xs",
  timezone: String,
  value: String,
};

const Time = ({
  aria = {},
  className,
  data = {},
  id,
  size = "sm",
  timezone = "America/NewYork",
  value,
}: TimeProps) => {
  const ariaProps = buildAriaProps(aria);
  const dataProps = buildDataProps(data);

  const css = classnames(className, buildCss("pb_time_kit", size));

  const time = new DateTime({ value: value });

  const formatTimeString = (value: DateTime) => {
    const hour = value.toHour();
    const minutes = value.toMinute();
    const meridian = value.toMeridian();

    return `${hour}:${minutes}${meridian}`;
  };

  const formatTimezoneString = (value: DateTime) => {
    const timezone = value.toTimezone().toString().toUpperCase();

    return `${timezone}`;
  };

  type TimeSubComponent = {
    value: DateTime,
  };

  const TimeSizeLarge = ({ value }: TimeSubComponent) => (
    <>
      <Title size={3} tag="span" text={formatTimeString(value)}>
        <span>
          <span className="pb_time_timezone">
            {formatTimezoneString(value)}
          </span>
        </span>
      </Title>
    </>
  );

  // const TimeSizeSmall = ({ value }: TimeSubComponent) => (
  //   <>
  //     <Body tag="span" text={formatTimeString(value)}>
  //       <Icon fixedWidth icon="clock">
  //         <time dateTime={value.toIso()}>
  //           <span>
  //             {formatTimeString(value)}
  //             <span className="pb_time_timezone">
  //               {formatTimezoneString(value)}
  //             </span>
  //           </span>
  //         </time>
  //       </Icon>
  //     </Body>
  //   </>
  // );

  const TimeSizeOther = ({ value }: TimeSubComponent) => (
    <>
      <Body tag="span" text={formatTimeString(value)}>
        <time dateTime={value.toIso}>
          <span>
            {formatTimeString(value)}
            <span className="pb_time_timezone">
              {formatTimezoneString(value)}
            </span>
          </span>
        </time>
      </Body>
    </>
  );

  return (
    <>
      <div {...ariaProps} {...dataProps} className={css} id={id}>
        <If condition={size === "lg"}>
          <TimeSizeLarge value={time} />
          <Else />
          <TimeSizeOther value={time} />
        </If>
      </div>
    </>
  );
};
export default Time;
