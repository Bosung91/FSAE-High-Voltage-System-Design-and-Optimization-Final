# High Voltage (HV) Distribution PCB

## Design
<p style='text-align: justify'>
The purpose of the HV Distribution PCB is to provide branched HV paths to systems that require HV. FSAE rule EV.6.6.6 states that lower stream conductors with lower ampacity must be fused.
</p>

<p style='text-align: justify'>
HV Distribution PCB provides HV to: Precharge-Discharge PCB, IMD, TSMP, Voltage Indicator, Ready to Move PCB and MSD. Based on the system requirements and EV.6.6.6, fuses are added only for conductors connecting to systems without external overcurrent protection. AWG 22 Tefzel wires are used, and Littelfuse 1A cartridge fuses rated for 1000Vdc were selected for their HV rating, 10kA interrupt capacity, and MIL-STD thermal and mechanical robustness (refer to <a href='https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/appendix.html#g' target='_blank'>Appendix G</a> for the full system requirements table, ampacity chart and fuse selection criteria).
</p>

## Testing
<p style='text-align: justify'>
The 26 HV Distribution PCB was tested to verify continuity across all Input/Output (IO) paths and to validate the design amendments. Continuity testing confirmed that <b>all IOs are continuous</b>, verifying the integrity of PCB traces and solder joints across all branched HV paths.
</p>

<center><img src='./Figures/26 HV Distribution Schematic.png'></center>
<center><i>Figure 36: 26 HV Distribution PCB Schematic</i></center>

<br>

<p style='text-align: justify'>
Based on further review of the HV distribution architecture, a fuse was added to the MSD negative terminal (MSD-) conductor as an extra layer of safety, providing redundant overcurrent protection on the negative HV path. The physical placement of connectors on the PCB was also rearranged to minimise the length of HV traces, reducing parasitic resistance, inductance, and the risk of electromagnetic interference (EMI).
</p>

<center><img src='./Figures/26 HV Distributin 3D Rendering.png'></center>
<center><i>Figure 37: 26 HV Distribution PCB 3D Rendering</i></center>

<br>

<p style='text-align: justify'>
The PCB is vertically mounted with Hirose DF63 series connectors for stable wire harness connections, cartridge fuse holders for ease of fuse replacement, and Humiseal 1B73 conformal coating for electrical insulation and moisture protection.
</p>

---
[Previous: TB PDM Verification](tb-pdm-verification.md) | [Table of Contents](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/#table-of-contents) | [Next: Shortcomings](shortcomings.md)
