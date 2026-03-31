# High Voltage (HV) Distribution Stress Testing

## Fuse Ampacity Validation
### Current and Wire Rating Analysis
<p style='text-align: justify'>
The 26 HV Distribution Printed Circuit Board (PCB) was tested to verify continuity across all Input/Output (IO) paths and to validate the design amendments made since the interim report. Continuity testing confirmed that <b>all IOs are continuous</b>, verifying the integrity of the PCB traces and solder joints across all branched HV paths.
</p>

<center><img src='./Figures/26 HV Distribution Schematic.png'></center>
<center><i>Figure 25: 26 HV Distribution PCB Schematic</i></center>

<br>

### Design Amendments
<p style='text-align: justify'>
Based on further review of the HV distribution architecture, the following amendments were made to the 26 HV Distribution PCB.
</p>

<p style='text-align: justify'>
A fuse was added to the Manual Service Disconnect negative terminal (MSD-) conductor as an extra layer of safety. While the interim report identified that only conductors connecting to systems without external overcurrent protection require fusing per Formula Society of Automotive Engineers (FSAE) rule EV.6.6.6, the addition of a fuse to MSD- provides redundant protection against overcurrent faults on the negative HV path.
</p>

<p style='text-align: justify'>
The physical placement of connectors on the PCB was also rearranged to minimise the length of HV traces between the input and output connectors. Shorter HV paths reduce parasitic resistance and inductance, improving power delivery efficiency and reducing the risk of electromagnetic interference (EMI).
</p>

<center><img src='./Figures/26 HV Distributin 3D Rendering.png'></center>
<center><i>Figure 26: 26 HV Distribution PCB 3D Rendering</i></center>

<br>

<p style='text-align: justify'>
<i>Figure 26</i> shows the updated 3D rendering of the 26 HV Distribution PCB with the rearranged connector layout and additional fuse for MSD-.
</p>

---
[Previous: TB PDM Verification](tb-pdm-verification.md) | [Table of Contents](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/#table-of-contents) | [Return to Home](README.md)
