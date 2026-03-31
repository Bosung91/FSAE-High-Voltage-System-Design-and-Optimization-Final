# Tractive Battery Power Distribution Module (TB PDM) Verification

## Signal Generator Testing
### Precharge Signal Stability
<p style='text-align: justify'>
As identified during R25Evo test runs, the Precharge signal oscillated due to a loose connection from the 25 Tractive Battery Power Distribution Module (TB PDM) to the Isolation Relay positive terminal (IR+), causing intermittent power loss mid drive. To verify the effectiveness of the redesigned 26 TB PDM with Hirose DF63 series connectors, the Precharge signal was logged during the most recent test run.
</p>

<center><img src='./Figures/R26E Test Run Logged Data.png'></center>
<center><i>Figure 15: Precharge Signal Logged Data from Most Recent Test Run</i></center>

<br>

<p style='text-align: justify'>
As shown in <i>Figure 15</i>, no fluctuation was observed in the Precharge signal throughout the test run. The signal remained stable at either 13.8V (HIGH) or 0V (LOW), with no oscillation between states. This confirms that the stable connections provided by the Hirose DF63 series connectors have effectively resolved the signal oscillation issue experienced during R25Evo test runs.
</p>

## Electrical Stress Testing
### Voltage Drop between Input and Output
<p style='text-align: justify'>
Voltage drop testing was conducted across all signal and power paths on the 26 TB PDM to verify that the Printed Circuit Board (PCB) can efficiently distribute signals and power to the systems connected to it. An external power supply was configured at 12V and 3A to simulate the Grounded Low Voltage (GLV) power source, as shown in <i>Figure 16</i>.
</p>

<center><img src='./Figures/External Power Supply Setup (Channel 1).jpg'></center>
<center><i>Figure 16: External Power Supply Setup (Channel 1)</i></center>

<br>

<center><img src='./Figures/26 TB PDM Schematic.jpg'></center>
<center><i>Figure 17: 26 TB PDM Schematic</i></center>

<br>

<center><img src='./Figures/IO Voltage Drop Test Setup.jpg'></center>
<center><i>Figure 18: Voltage Drop Test Setup</i></center>

<br>

<p style='text-align: justify'>
Voltage measurements were taken at each input-output pair on the 26 TB PDM. The results are summarised in <i>Figure 19</i>.
</p>

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
<center><i>Figure 19: Voltage Drop between Input and Output</i></center>

<br>

<p style='text-align: justify'>
A consistent voltage drop of 0.3V was observed across all paths that have rectifier diodes installed to protect the GLV battery from reverse polarity. All other signal paths exhibited negligible voltage drops. These results confirm that the 26 TB PDM is able to efficiently distribute signals and power to the systems connected to it.
</p>

### Reversed 12V Polarity Test
<p style='text-align: justify'>
To verify the effectiveness of the rectifier diodes in protecting the GLV battery, a reversed 12V polarity test was conducted on the power output paths. The external power supply polarity was reversed and the output voltage at each protected path was measured.
</p>

<center><img src='./Figures/BMS Ready Reversed Polarity.jpg'></center>
<center><i>Figure 20: BMS Ready Reversed Polarity</i></center>

<br>

<center><img src='./Figures/THERM PWR Reversed Polarity.jpg'></center>
<center><i>Figure 21: THERM PWR Reversed Polarity</i></center>

<br>

<center><img src='./Figures/FAN PWR Reversed Polarity.jpg'></center>
<center><i>Figure 22: FAN PWR Reversed Polarity</i></center>

<br>

<p style='text-align: justify'>
As shown in <i>Figures 20 to 22</i>, the TB PDM's reverse polarity protection is effective. The rectifier diodes successfully blocked reverse current flow in all tested paths, confirming that the GLV battery and other connected components are protected from damage due to accidental reverse polarity.
</p>

## DVP Amendments
### Shutdown Line Diagnostic LEDs
<p style='text-align: justify'>
Shutdown Line diagnostic Light Emitting Diodes (LEDs) were added to the 26 TB PDM to provide visual feedback on the status of each Shutdown Line component. Each LED corresponds to a specific Shutdown Line node and lights up when there is no fault detected at that node. The Shutdown Line components monitored by the diagnostic LEDs are: Tractive Battery (TB) Charger, Interlock, IR+, IR-, Manual Service Disconnect (MSD), Precharge-Discharge, and Tractive System Measuring Point (TSMP).
</p>

<center><img src='./Figures/R26E Testbench.jpg'></center>
<center><i>Figure 23: R26E Testbench</i></center>

<br>

<center><img src='./Figures/26 TB PDM SDL LEDs.jpg'></center>
<center><i>Figure 24: 26 TB PDM Shutdown Line LEDs</i></center>

<br>

<p style='text-align: justify'>
As shown in <i>Figure 24</i>, the Shutdown Line LEDs work as intended. Wiring up the R26E Shutdown Line on the testbench successfully lit all the LEDs, confirming the diagnostic feature is functional. This amendment enables the team to quickly gather information about the Shutdown Line status whenever the car breaks down, significantly reducing troubleshooting time compared to R25Evo where Shutdown Line faults had to be diagnosed without any visual indication.
</p>

---
[Previous: PCDC Optimization](pcdc-optimization.md) | [Table of Contents](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/#table-of-contents) | [Next: HV Distribution Testing](hv-distribution-testing.md)
