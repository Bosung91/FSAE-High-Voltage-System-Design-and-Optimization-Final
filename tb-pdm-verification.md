# Tractive Battery Power Distribution Module (TB PDM) Verification

## Design
<p style='text-align: justify'>
The primary purpose of the TB PDM PCB is to distribute power and signals within the TB enclosure. There are a total of 59 power, signal and ground ports (refer to <a href='https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/appendix.html#f' target='_blank'>Appendix F</a> for the full port specification table). PCB copper trace widths were calculated using Altium Designer under the IPC-2221 standard. Diagnostic Light Emitting Diodes (LEDs) were added to indicate Shutdown Line status, and rectifier diodes protect power supply from the ECU or TB charger.
</p>

<center><img src='./Figures/Tractive Battery PDM PCB Schematic.png'></center>
<center><i>Figure 25: 26 TB PDM PCB Schematic</i></center>

<br>

<p style='text-align: justify'>
R25Evo stopped approximately 20 times due to loose wire harness connections. Hirose DF63 series connectors were chosen for internal connections due to their crimp profile and locking mechanism that ensures secure connection under vibration (<a href='https://drive.google.com/file/d/10Ltabzmpp26rV4KXxHFZl8xF2f_CsPVx/view?usp=sharing' target='_blank'>Hirose, 2025</a>). Deutsch Autosport connectors are used for external connections due to their superior pin density and waterproofness. The board is mounted vertically with Humiseal 1B73 conformal coat for electrical insulation and moisture protection (refer to <a href='https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/appendix.html#f' target='_blank'>Appendix F</a> for component calculations).
</p>

<center><img src='./Figures/Tractive Battery PDM PCB Front.png'></center>
<center><i>Figure 26: 26 TB PDM PCB Front View</i></center>

## Testing
### Precharge Signal Stability
<p style='text-align: justify'>
To verify the effectiveness of the redesigned 26 TB PDM with Hirose DF63 series connectors, the Precharge signal was logged during the most recent test run.
</p>

<center><img src='./Figures/R26E Test Run Logged Data.png'></center>
<center><i>Figure 27: Precharge Signal Logged Data from Most Recent Test Run</i></center>

<br>

<p style='text-align: justify'>
As shown in <i>Figure 27</i>, no fluctuation was observed throughout the test run. The signal remained stable at either 13.8V (HIGH) or 0V (LOW), confirming that the Hirose DF63 series connectors have effectively resolved the signal oscillation issue experienced during R25Evo test runs.
</p>

### Voltage Drop between Input and Output
<p style='text-align: justify'>
Voltage drop testing was conducted across all signal and power paths on the 26 TB PDM to verify efficient distribution. An external power supply was configured at 12V and 3A to simulate the Grounded Low Voltage (GLV) power source, as shown in <i>Figure 28</i>.
</p>

<center><img src='./Figures/External Power Supply Setup (Channel 1).jpg'></center>
<center><i>Figure 28: External Power Supply Setup (Channel 1)</i></center>

<br>

<center><img src='./Figures/IO Voltage Drop Test Setup.jpg'></center>
<center><i>Figure 29: Voltage Drop Test Setup</i></center>

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
<center><i>Figure 30: Voltage Drop between Input and Output</i></center>

<br>

<p style='text-align: justify'>
A consistent voltage drop of 0.3V was observed across all paths with rectifier diodes installed to protect the GLV battery. All other signal paths exhibited negligible voltage drops, confirming efficient signal and power distribution.
</p>

### Reversed 12V Polarity Test
<p style='text-align: justify'>
To verify the rectifier diodes' effectiveness, a reversed 12V polarity test was conducted on the power output paths.
</p>

<center><img src='./Figures/BMS Ready Reversed Polarity.jpg'></center>
<center><i>Figure 31: BMS Ready Reversed Polarity</i></center>

<br>

<center><img src='./Figures/THERM PWR Reversed Polarity.jpg'></center>
<center><i>Figure 32: THERM PWR Reversed Polarity</i></center>

<br>

<center><img src='./Figures/FAN PWR Reversed Polarity.jpg'></center>
<center><i>Figure 33: FAN PWR Reversed Polarity</i></center>

<br>

<p style='text-align: justify'>
As shown in <i>Figures 31 to 33</i>, the rectifier diodes successfully blocked reverse current flow in all tested paths, confirming that the GLV battery and other connected components are protected from accidental reverse polarity.
</p>

### Shutdown Line Diagnostic LEDs
<p style='text-align: justify'>
Shutdown Line diagnostic LEDs were added to the 26 TB PDM to provide visual feedback on the status of each Shutdown Line component: TB Charger, Interlock, IR+, IR-, Manual Service Disconnect (MSD), Precharge-Discharge, and Tractive System Measuring Point (TSMP).
</p>

<center><img src='./Figures/R26E Testbench.jpg'></center>
<center><i>Figure 34: R26E Testbench</i></center>

<br>

<center><img src='./Figures/26 TB PDM SDL LEDs.jpg'></center>
<center><i>Figure 35: 26 TB PDM Shutdown Line LEDs</i></center>

<br>

<p style='text-align: justify'>
As shown in <i>Figure 35</i>, the Shutdown Line LEDs work as intended. Wiring up the R26E Shutdown Line on the testbench successfully lit all the LEDs, enabling the team to quickly identify Shutdown Line faults, significantly reducing troubleshooting time compared to R25Evo.
</p>

---
[Previous: PCDC Optimization](pcdc-optimization.md) | [Table of Contents](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/#table-of-contents) | [Next: HV Distribution PCB](hv-distribution-testing.md)
