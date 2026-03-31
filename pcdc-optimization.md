# Precharge-Discharge PCB (PCDC) Optimization

## Testing Methodology
<p style='text-align: justify'>
Following the diagnosis from R25Evo that Precharge resistors failed due to insufficient heat dissipation, a controlled test was conducted to evaluate the thermal performance of two candidate resistors: a 1.5kΩ through-hole resistor (used in R25Evo) and a 3.3kΩ chassis mount resistor (proposed for R26E). The objective was to determine which resistor can reliably withstand the full Tractive System (TS) voltage range without exceeding its thermal limits.
</p>

<center><img src='./Figures/Resistor Test Setup.jpg'></center>
<center><i>Figure 1: Resistor Test Setup</i></center>

<br>

<p style='text-align: justify'>
As shown in <i>Figure 1</i>, a thermistor (green arrow) was placed in direct contact with the resistor (blue arrow) to monitor temperature in real time. Each resistor was subjected to a Precharge cycle at incremental voltage levels from 50V to 360V (maximum TS voltage), and the temperature response was recorded over time.
</p>

<center><img src='./Figures/Temp vs Time 50V.png'></center>
<center><i>Figure 2: Temperature vs. Time at 50V</i></center>

<br>

<center><img src='./Figures/Temp vs Time 100V.png'></center>
<center><i>Figure 3: Temperature vs. Time at 100V</i></center>

<br>

<center><img src='./Figures/Temp vs Time 150V.png'></center>
<center><i>Figure 4: Temperature vs. Time at 150V</i></center>

<br>

<center><img src='./Figures/Temp vs Time 200V.png'></center>
<center><i>Figure 5: Temperature vs. Time at 200V</i></center>

<br>

<center><img src='./Figures/Temp vs Time 250V.png'></center>
<center><i>Figure 6: Temperature vs. Time at 250V</i></center>

<br>

<center><img src='./Figures/Temp vs Time 300V.png'></center>
<center><i>Figure 7: Temperature vs. Time at 300V</i></center>

<br>

<center><img src='./Figures/Temp vs Time 360V.png'></center>
<center><i>Figure 8: Temperature vs. Time at 360V</i></center>

<br>

<p style='text-align: justify'>
Temperature rise was observed in the 1.5kΩ through-hole resistor starting from 100V, while the 3.3kΩ chassis mount resistor remained at ambient temperature up to 250V. The maximum temperature reached by the 1.5kΩ through-hole resistor was 86°C at 250V. The 1.5kΩ through-hole resistor <b>failed at 300V</b>, which is significantly lower than its datasheet rated voltage of 700V, confirming the findings from the interim report that the failure was caused by insufficient heat dissipation rather than electrical overspeccing. In contrast, the 3.3kΩ chassis mount resistor continued to perform at 360V (maximum TS voltage) with only a <b>10°C temperature rise</b>. The 3.3kΩ chassis mount resistor was therefore selected as the Precharge resistor for R26E.
</p>

### Isolation Relay (IR) Troubleshooting & Selection
<p style='text-align: justify'>
During testing, the previously specced Accumulator Isolation Relays (AIRs), <b>Albright HV500</b>, did not latch even when the Shutdown Line was completed. Upon testing the relay independently using an external power supply, the pull-in current was found to be too high to be supplied by the Shutdown Line. The datasheet-derived pull-in current at 12V was 3A (27V ÷ 9Ω), and the measured actual pull-in current was 3.11A, as shown in <i>Figure 9</i>.
</p>

<center><img src='./Figures/Albright HV500 Pull-in Current.png'></center>
<center><i>Figure 9: Albright HV500 Pull-in Current</i></center>

<br>

<p style='text-align: justify'>
Another Isolation Relay used in a previous season, <b>KILOVAC EV200</b>, was tested as an alternative. Despite having a higher datasheet pull-in current of 3.8A at 12V, its actual measured pull-in current was only 0.34A, as shown in <i>Figure 10</i>, which was well within the Shutdown Line's current capacity.
</p>

<center><img src='./Figures/KILOVAC EV200 Pull-in Current.png'></center>
<center><i>Figure 10: KILOVAC EV200 Pull-in Current</i></center>

<br>

<center>
<table style="border-collapse:collapse;border-spacing:0;">
<thead>
  <tr>
    <th style="border:1px solid black;padding:10px 5px;text-align:left;font-weight:bold">Parameter</th>
    <th style="border:1px solid black;padding:10px 5px;text-align:left;font-weight:bold">Albright HV500</th>
    <th style="border:1px solid black;padding:10px 5px;text-align:left;font-weight:bold">KILOVAC EV200</th>
  </tr></thead>
<tbody>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">Datasheet Pull-in Current at 12V / A</td>
    <td style="border:1px solid black;padding:10px 5px">3 (derived: 27/9)</td>
    <td style="border:1px solid black;padding:10px 5px">3.8</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">Actual Pull-in Current at 12V / A</td>
    <td style="border:1px solid black;padding:10px 5px">3.11</td>
    <td style="border:1px solid black;padding:10px 5px">0.34</td>
  </tr>
</tbody>
</table>
</center>
<center><i>Figure 11: IR Pull-in Current Comparison</i></center>

<br>

<p style='text-align: justify'>
As shown in <i>Figure 11</i>, the KILOVAC EV200's actual pull-in current was significantly lower than both its datasheet value and the Albright HV500's actual pull-in current. Since the EV200 shares the same form factor and mounting points as the HV500, it was used as a direct replacement. Upon replacing to EV200, the Isolation Relays latched properly.
</p>

## Power Dissipation Analysis
### % Error vs. Resistance
<p style='text-align: justify'>
After selecting the 3.3kΩ chassis mount resistor based on thermal testing, the actual power dissipation during a Precharge cycle was validated against the Electric Systems Form (ESF) calculated values. The Cascadia Inverter DC Bus Voltage was logged at 100Hz over time during a test run, and the trapezoidal method was used to compute the actual power dissipation.
</p>

<center><img src='./Figures/Inverter DC Bus Voltage vs Time.png'></center>
<center><i>Figure 12: Inverter DC Bus Voltage vs. Time</i></center>

<br>

<p style='text-align: justify'>
The actual power dissipation was derived using the trapezoidal method to approximate the area under the power-time curve. For each time interval, instantaneous power was calculated using P = V²/R (where R = 3300Ω), and the energy for each segment was computed using the trapezoidal formula: E<sub>segment</sub> = (P<sub>i</sub> + P<sub>i+1</sub>) / 2 × Δt, where Δt = 0.01s. The total energy dissipated was obtained by summing all segment energies up to the time to 90%, and the average power was obtained by dividing the total energy by the time to 90%.
</p>

<p style='text-align: justify'>
The ESF time to 90% was calculated using:
</p>

<center>t<sub>90%</sub> = −ln(0.1) × R × C = −ln(0.1) × 3300 × 650 × 10⁻⁶ = <b>4.94s</b></center>

<br>

<p style='text-align: justify'>
The ESF power dissipation was calculated using:
</p>

<center>P = ½CV² / t<sub>90%</sub> = ½ × 650 × 10⁻⁶ × 356² / 4.94 = <b>8.34W</b></center>

<br>

<p style='text-align: justify'>
The actual time to 90% was determined from the logged data. The steady-state voltage after the Isolation Relays closed was 345.3V, giving a 90% threshold of 0.9 × 345.3 = 310.77V. From the logged data, the Inverter DC Bus Voltage first reached this threshold at <b>t = 6.18s</b>. It should be noted that at t = 6.44s, the logged voltage jumps from 312.9V to 345.2V, which indicates the moment the Isolation Relays closed and the Precharge sequence completed; this represents the total Precharge duration, not the time to 90%. The total energy dissipated by the Precharge resistor up to the time to 90% was 102.64J, giving an average power dissipation of 102.64 / 6.18 = <b>16.62W</b>.
</p>

<center>
<table style="border-collapse:collapse;border-spacing:0;">
<thead>
  <tr>
    <th style="border:1px solid black;padding:10px 5px;text-align:left;font-weight:bold">Parameter</th>
    <th style="border:1px solid black;padding:10px 5px;text-align:left;font-weight:bold">Actual</th>
    <th style="border:1px solid black;padding:10px 5px;text-align:left;font-weight:bold">ESF Calculated</th>
    <th style="border:1px solid black;padding:10px 5px;text-align:left;font-weight:bold">% Error</th>
  </tr></thead>
<tbody>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">Time to 90% / s</td>
    <td style="border:1px solid black;padding:10px 5px">6.18</td>
    <td style="border:1px solid black;padding:10px 5px">4.94</td>
    <td style="border:1px solid black;padding:10px 5px">25.1</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">Total Energy Dissipated / J</td>
    <td style="border:1px solid black;padding:10px 5px">102.64</td>
    <td style="border:1px solid black;padding:10px 5px">41.19</td>
    <td style="border:1px solid black;padding:10px 5px">149.2</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">Average Power Dissipation / W</td>
    <td style="border:1px solid black;padding:10px 5px">16.62</td>
    <td style="border:1px solid black;padding:10px 5px">8.34</td>
    <td style="border:1px solid black;padding:10px 5px">99.3</td>
  </tr>
</tbody>
</table>
</center>
<center><i>Figure 13: Actual vs. ESF Power Dissipation Comparison</i></center>

<br>

<p style='text-align: justify'>
Despite the significant discrepancy between actual and ESF values, the actual average power dissipation of 16.62W remains <b>below the continuous power rating of 20W</b> for the 3.3kΩ chassis mount Precharge resistor, confirming safe operation.
</p>

<p style='text-align: justify'>
Potential reasons for the discrepancy between actual and ESF values are as follows:
</p>

<p style='text-align: justify'>
<b>1. Inverter internal circuitry loading during Precharge:</b> The ESF model assumes a simple Resistor-Capacitor (RC) circuit where the Precharge resistor charges the Inverter DC bus capacitor. In practice, the Inverter's internal electronics (gate drivers, control circuits, auxiliary power supplies) draw current from the DC bus during Precharge, increasing the total power dissipated and extending the charging time.
</p>

<p style='text-align: justify'>
<b>2. Parasitic resistance in wiring and connectors:</b> The ESF calculation only accounts for the Precharge resistor value of 3300Ω. In the actual circuit, wire resistance, relay contact resistance, and connector contact resistance contribute to additional voltage drops and power dissipation across the circuit, altering the effective RC time constant.
</p>

<p style='text-align: justify'>
<b>3. Voltage-dependent bus capacitance:</b> The ESF uses a fixed bus capacitance of 650μF. The actual Inverter DC bus capacitance may exhibit voltage-dependent behaviour (e.g., electrolytic capacitors have capacitance that varies with applied voltage), leading to a longer charging time and higher energy dissipated than the ideal model predicts.
</p>

<p style='text-align: justify'>
<b>4. Lower actual Tractive System voltage:</b> The actual TS voltage during the test run was 345.3V, lower than the maximum voltage of 356V used in the ESF calculation. While lower voltage reduces peak instantaneous power (P = V²/R), the combined effect of the above factors outweighs this reduction, resulting in a net higher power dissipation.
</p>

## Precharge Sequence Timing
<p style='text-align: justify'>
Formula Society of Automotive Engineers (FSAE) rule EV.7.2.2 states that the discharge time (time taken for the Tractive System to reach below 60V) must be less than 5 seconds.
</p>

<center><img src='./Figures/EV.7.2.2.png'></center>
<center><i>Figure 14: FSAE EV.7.2.2</i></center>

<br>

<p style='text-align: justify'>
With the selected 3.3kΩ chassis mount resistor and a bus capacitance of 650μF, the discharge time is calculated as follows:
</p>

<center>2 × R × C = 2 × 3300 × 650 × 10⁻⁶ = <b>4.29s</b></center>

<br>

<p style='text-align: justify'>
Since 4.29s is less than the 5s requirement stated in EV.7.2.2, the selected resistor is <b>rule compliant</b>.
</p>

## Resistor Selection
<p style='text-align: justify'>
Based on the comprehensive testing conducted, the <b>3.3kΩ chassis mount resistor</b> has been selected as the Precharge resistor for R26E. The 3.3kΩ chassis mount resistor demonstrated thermal stability with only a 10°C temperature rise at the maximum TS voltage of 360V, compared to the 1.5kΩ through-hole resistor which failed at 300V. Its actual average power dissipation of 16.62W is within the continuous power rating of 20W. The discharge time of 4.29s satisfies the FSAE EV.7.2.2 requirement of 5s. Furthermore, the chassis mount form factor enables direct thermal coupling to a heat sink, addressing the root cause of R25Evo's Precharge resistor failure.
</p>

---
[Back to Home](README.md) | [Table of Contents](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/#table-of-contents) | [Next: TB PDM Verification](tb-pdm-verification.md)
