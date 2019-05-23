import React from "react";

export default class Description extends React.Component {
  render() {
    return (
      <div className="principal">
        <div className="header">
          <h1>Light sensor with digital counter</h1>
        </div>
        <div className="desc">
          <p>
            When supplied with electrical current, the DC motor turns on the
            digital counter. On the same board, there is a light sensor that
            when senses light, increments a counter that is displayed on the
            digital counter. The sensor counts as long as a stronger light
            blinks over it and stops counting where there is a continuous source
            of light.
          </p>
          <p>
            The light beam from torch is continually hit on the LDR so the
            resistance of LDR is low and the voltage drop across LDR and ground
            is less than 0.6V
          </p>
          <p>The threshold voltage 0.6V can be set by varying the POT 10K</p>
          <p>
            When a person or an object is passes between the light beams light
            will not hit on the LDR so the resistance of LDR become high
          </p>
          <p>
            We have V=IxR (Voltage = Current X Resistance) i.e., the resistance
            of LDR is high voltage across LDR become hig
          </p>
          <p>
            If the voltage across LDR exceeds 0.6V then transistor will ON and
            start conducting
          </p>
          <p>
            When the transistor is ON, the potential at point A becomes LOW and
            when the transistor become OFF, the potential at a will be HIGH
          </p>
          <p>
            As soon as the person cross the light beam a LOW and HIGH voltage
            transition occur at the point A.
          </p>
          <p>
            Which is fed to the Clock of 4026 IC, it will start count with the
            clock and display on seven segment display 4026 will increment the
            count when each person enters in to the room
          </p>
        </div>
      </div>
    );
  }
}
