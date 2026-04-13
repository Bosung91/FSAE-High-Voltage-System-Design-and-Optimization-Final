---
layout: default
title: TB PDM Verification
---

# Tractive Battery Power Distribution Module (TB PDM) Verification

## Design
<p style='text-align: justify'>
The primary purpose of the TB PDM PCB is to distribute power and signals within the TB enclosure. There are a total of 59 power, signal and ground ports (refer to <a href='https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/appendix.html#f' target='_blank'>Appendix F</a> for the full port specification table). PCB copper trace widths were calculated using Altium Designer under the IPC-2221 standard. Diagnostic Light Emitting Diodes (LEDs) were added to indicate Shutdown Line status, and rectifier diodes protect power supply from the ECU or TB charger.
</p>

<center><img src='./Figures/Tractive Battery PDM PCB Schematic.png'></center>
<center><i>Figure 31: 26 TB PDM PCB Schematic</i></center>

<br>

<p style='text-align: justify'>
R25Evo stopped approximately 20 times due to loose wire harness connections. Hirose DF63 series connectors were chosen for internal connections due to their crimp profile and locking mechanism that ensures secure connection under vibration (<a href='https://drive.google.com/file/d/10Ltabzmpp26rV4KXxHFZl8xF2f_CsPVx/view?usp=sharing' target='_blank'>Hirose, 2025</a>). Deutsch Autosport connectors are used for external connections due to their superior pin density and waterproofness. The board is mounted vertically with Humiseal 1B73 conformal coat for electrical insulation and moisture protection (refer to <a href='https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/appendix.html#f' target='_blank'>Appendix F</a> for component calculations).
</p>

<center><img src='./Figures/Tractive Battery PDM PCB Front.png'></center>
<center><i>Figure 32: 26 TB PDM PCB Front View</i></center>

### Connector Selection Justification: Hirose DF63
<p style='text-align: justify'>
The Hirose DF63 series connectors are selected for PCB-level wire-to-board connections within the tractive system tractive battery enclosure. This section addresses their mechanical suitability, particularly vibration and shock resistance, in the context of the operating environment.
</p>

<p style='text-align: justify'>
The tractive battery container is a rigid, sealed enclosure mounted directly to the carbon fibre monocoque chassis. The monocoque structure is inherently stiff in bending and torsion, meaning components mounted to it experience significantly attenuated vibration relative to outboard or unsprung-mass locations. The dominant vibration content at this mounting location is expected to remain within the low-frequency range associated with chassis structural modes, well within the DF63's tested envelope of 10 to 55 Hz sinusoidal vibration at 0.75 mm half-amplitude.
</p>

<p style='text-align: justify'>
Logged accelerometer data from recent vehicle runs recorded a maximum of 2.64g at the chassis level, sampled at 50 Hz. The Nyquist theorem states that a digital sampler can faithfully capture only frequency content up to half the sampling rate; at 50 Hz, only events below 25 Hz are fully resolved — short-duration transient shocks with energy content above 25 Hz are not fully represented in the logged peak value. However, the DF63's shock resistance rating of 490 m/s² (approximately 50g) for 11 ms in a half-sine pulse across three axes provides a safety factor of approximately 18.9 times over the highest recorded acceleration. This margin is deliberately conservative and accounts for the limited logging bandwidth, possible localised amplification within the tractive battery substructure between its mounting points and the PCB, and the difference between a sustained quasi-static load and the short-duration impulses the connector is actually rated to withstand. Even under a worst-case assumption that true peak transient accelerations are several times higher than the logged value, the connector remains well within its verified shock envelope.
</p>

<center><img src='./Figures/R26E G-level.png'></center>
<center><i>Figure 33: R26E Chassis G-level Logged During Test Run (max 2.64g)</i></center>

<br>

<p style='text-align: justify'>
The DF63's vibration resistance criterion requires no electrical discontinuity exceeding 1 microsecond, and the shock resistance criterion applies the same threshold — both tested across three mutually perpendicular axes. These quantified acceptance criteria allow the team to make an informed engineering judgement about connector suitability at this specific mounting location, grounded in measured vehicle data rather than assumption.
</p>

<p style='text-align: justify'>
In previous competition years, the team used Matelock-series connectors for the same application. These connectors do not publish vibration resistance, shock resistance, or contact resistance specifications in their publicly available documentation. Their use was therefore based on assumed adequacy rather than verified performance. The transition to the DF63 represents a deliberate improvement in component traceability and design rigour, as all relevant electrical and mechanical parameters are documented, testable, and traceable to published third-party certifications (refer to <a href='https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/appendix.html#f' target='_blank'>Appendix F</a> for full connector specifications).
</p>

<p style='text-align: justify'>
While the DF63 is not qualified to automotive random vibration standards such as SAE/USCAR-2 or ISO 16750-3, such qualification is not required by FSAE rules for connectors internal to the tractive battery enclosure, nor is it proportionate to the vibration environment at this location. The measured 2.64g peak chassis acceleration, even with the acknowledged bandwidth limitation of the 50 Hz logging rate, confirms that the operating environment is well within the connector's verified capability with substantial margin. The connector's positive-lock mechanism with tactile confirmation and incomplete-insertion prevention further reduces the risk of intermittent connection under vibration — failure modes not addressed by the absence of any mechanical specification in the previously used Matelock connectors.
</p>

## Testing
### Precharge Signal Stability
<p style='text-align: justify'>
To verify the effectiveness of the redesigned 26 TB PDM with Hirose DF63 series connectors, the Precharge signal was logged during the most recent test run.
</p>

<center><img src='./Figures/R26E Test Run Logged Data.png'></center>
<center><i>Figure 34: Precharge Signal Logged Data from Most Recent Test Run</i></center>

<br>

<p style='text-align: justify'>
As shown in <i>Figure 34</i>, no fluctuation was observed throughout the test run. The signal remained stable at either 13.8V (HIGH) or 0V (LOW), confirming that the Hirose DF63 series connectors have effectively resolved the signal oscillation issue experienced during R25Evo test runs.
</p>

### Voltage Drop between Input and Output
<p style='text-align: justify'>
Voltage drop testing was conducted across all signal and power paths on the 26 TB PDM to verify efficient distribution. An external power supply was configured at 12V and 3A to simulate the Grounded Low Voltage (GLV) power source, as shown in <i>Figure 35</i>.
</p>

<center><img src='./Figures/External Power Supply Setup (Channel 1).jpg'></center>
<center><i>Figure 35: External Power Supply Setup (Channel 1)</i></center>

<br>

<center><img src='./Figures/IO Voltage Drop Test Setup.jpg'></center>
<center><i>Figure 36: Voltage Drop Test Setup</i></center>

<br>

<center>
<table style="border-collapse:collapse;border-spacing:0;">
<thead>
  <tr>
    <th style="border:1px solid black;padding:10px 5px;text-align:left;font-weight:bold">Input</th>
    <th style="border:1px solid black;padding:10px 5px;text-align:left;font-weight:bold">Output</th>
    <th style="border:1px solid black;padding:10px 5px;text-align:left;font-weight:bold">Voltage Drop / V</th>
  </tr></thead>
<tbody>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">AMBER (PDM IN)</td>
    <td style="border:1px solid black;padding:10px 5px">AMBER (RTM)</td>
    <td style="border:1px solid black;padding:10px 5px">Negligible</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">12V</td>
    <td style="border:1px solid black;padding:10px 5px">Battery Management System (BMS) Ready</td>
    <td style="border:1px solid black;padding:10px 5px">0.3</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">BMS OK (BMS IO)</td>
    <td style="border:1px solid black;padding:10px 5px">BMS OK (PDM IN)</td>
    <td style="border:1px solid black;padding:10px 5px">Negligible</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">BMS CHARGE ENABLE (BMS IO)</td>
    <td style="border:1px solid black;padding:10px 5px">BMS CHARGE ENABLE (PDM IN)</td>
    <td style="border:1px solid black;padding:10px 5px">Negligible</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">CT Test IN (PDM IN)</td>
    <td style="border:1px solid black;padding:10px 5px">CT Test IN (CT TEST)</td>
    <td style="border:1px solid black;padding:10px 5px">Negligible</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">CT Test OUT (PDM IN)</td>
    <td style="border:1px solid black;padding:10px 5px">CT Test OUT (CT TEST)</td>
    <td style="border:1px solid black;padding:10px 5px">Negligible</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">12V</td>
    <td style="border:1px solid black;padding:10px 5px">FAN PWR</td>
    <td style="border:1px solid black;padding:10px 5px">0.3</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">12V</td>
    <td style="border:1px solid black;padding:10px 5px">Isolation Monitoring Device (IMD) PWR</td>
    <td style="border:1px solid black;padding:10px 5px">0.3</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">IMD OK (IMD)</td>
    <td style="border:1px solid black;padding:10px 5px">IMD OK (PDM IN)</td>
    <td style="border:1px solid black;padding:10px 5px">Negligible</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">INT IN (PDM IN)</td>
    <td style="border:1px solid black;padding:10px 5px">INT IN (INT)</td>
    <td style="border:1px solid black;padding:10px 5px">Negligible</td>
  </tr>
  <tr>
    <td style="border:1px solid black;padding:10px 5px">12V</td>
    <td style="border:1px solid black;padding:10px 5px">PD PWR</td>
    <td style="border:1px solid black;padding:10px 5px">0.3</td>
  </tr>
</tbody>
</table>
</center>
<center><i>Figure 37: Voltage Drop between Input and Output</i></center>

<br>

<p style='text-align: justify'>
A consistent voltage drop of 0.3V was observed across all paths with rectifier diodes installed to protect the GLV battery. All other signal paths exhibited negligible voltage drops, confirming efficient signal and power distribution.
</p>

### Reversed 12V Polarity Test
<p style='text-align: justify'>
To verify the rectifier diodes' effectiveness, a reversed 12V polarity test was conducted on the power output paths.
</p>

<center><img src='./Figures/BMS Ready Reversed Polarity.jpg'></center>
<center><i>Figure 38: BMS Ready Reversed Polarity</i></center>

<br>

<center><img src='./Figures/THERM PWR Reversed Polarity.jpg'></center>
<center><i>Figure 39: THERM PWR Reversed Polarity</i></center>

<br>

<center><img src='./Figures/FAN PWR Reversed Polarity.jpg'></center>
<center><i>Figure 40: FAN PWR Reversed Polarity</i></center>

<br>

<p style='text-align: justify'>
As shown in <i>Figures 38 to 40</i>, the rectifier diodes successfully blocked reverse current flow in all tested paths, confirming that the GLV battery and other connected components are protected from accidental reverse polarity.
</p>

### Shutdown Line Diagnostic LEDs
<p style='text-align: justify'>
Shutdown Line diagnostic LEDs were added to the 26 TB PDM to provide visual feedback on the status of each Shutdown Line component: TB Charger, Interlock, IR+, IR-, Manual Service Disconnect (MSD), Precharge-Discharge, and Tractive System Measuring Point (TSMP).
</p>

<center><img src='./Figures/R26E Testbench.jpg'></center>
<center><i>Figure 41: R26E Testbench</i></center>

<br>

<center><img src='./Figures/26 TB PDM SDL LEDs.jpg'></center>
<center><i>Figure 42: 26 TB PDM Shutdown Line LEDs</i></center>

<br>

<p style='text-align: justify'>
As shown in <i>Figure 42</i>, the Shutdown Line LEDs work as intended. Wiring up the R26E Shutdown Line on the testbench successfully lit all the LEDs, enabling the team to quickly identify Shutdown Line faults, significantly reducing troubleshooting time compared to R25Evo.
</p>

---
[Previous: PCDC Optimization](pcdc-optimization.md) | [Table of Contents](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/#table-of-contents) | [Next: HV Distribution PCB](hv-distribution-testing.md)
