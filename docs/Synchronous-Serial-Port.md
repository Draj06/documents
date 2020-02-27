
# Synchronous Serial Port(SSP)


## Introduction

The [SSP](http://en.wikipedia.org/wiki/Synchronous_Serial_Port)(Synchronous Serial Port) block is an IP provided by ARM (PL022 “PrimeCell® Synchronous Serial Port”).
Additional details about its functional blocks may be found in “ARM PrimeCell® Synchronous Serial Port (PL022) Technical Reference Manual”.


## Features 

*  The SSP is a master or slave interface that enables synchronous serial communication with slave or master peripherals having one of the following:
  * A MOTOROLA SPI-compatible interface
  * A TEXAS INSTRUMENTS synchronous serial interface
  * A National Semiconductor MICROWIRE® interface       
*   The SPI interface operates as a master or slave interface. It supports bit rates up to 2 MHz and higher in both master and slave configurations. The SPI has the following features:
  *	Parallel-to-serial conversion on data written to an internal 16-bit wide, 8-location deep transmit FIFO
  *	Serial-to-parallel conversion on received data, buffering it in a 16-bit wide, 8-location deep receive FIFO
  *	Programmable data frame size from 4 to 16 bits
  *	Programmable clock bit rate and prescaler. The input clock may be divided by a factor of 2 to 254 in steps of two to provide the serial output clock
  *	Programmable clock phase and polarity.


## Functional description

The below Figure shows the SSP block diagram.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_block_diagram.jpg "Figure 1 SSP block diagram")

### Clock prescaler

When configured as a master, an internal prescaler is used to provide the serial output clock. The prescaler may be programmed through the SSPCPSR register to divide the SSPCLK by a factor of 2 to 254 in two steps. As the least significant bit of the SSPCPSR register is not used, division by an odd number is impossible and this ensures a symmetrical (equal mark space ratio) clock is generated.

The output of this prescaler is further divided by a factor 1 to 256 through the programming of the SSPCR0 control register, to give a final master output clock.


### Transmit FIFO

The common transmit FIFO is a 16-bit wide, 8-locations deep, First-In, First-Out (FIFO) memory buffer. CPU data written across the AMBA APB interface are stored in the buffer until it is read out by the transmit logic.

When configured as a master or a slave, parallel data is written into the transmit FIFO prior to serial conversion and is transmitted to the attached slave or master through the SSPTXD pin.

### Receive FIFO

The common receive FIFO is a 16-bit wide, 8-locations deep, first-in, first-out memory buffer.
Received data from the serial interface are stored in the buffer until it is read out by the CPU across the AMBA APB interface.

When configured as a master or slave, serial data received through the SSPRXD pin is registered prior to parallel loading into the attached slave or master receive FIFO.


###Interrupt generation logic
The PrimeCell SSP generates four individual maskable, active-HIGH interrupts. A combined interrupt output is also generated as an OR function of the individual interrupt requests.

Users can use the single combined interrupt with a system interrupt controller that provides another level of masking on a per-peripheral basis. This enables use of modular device drivers that always know where to find the interrupt source control register bits.

Users can also use the individual interrupt requests with a system interrupt controller that provides masking for the outputs of each peripheral. In this way, a global interrupt controller service routine can read the entire set of sources from one wide register in the system interrupt controller. This is attractive when the time to read from the peripheral registers is significant compared to the CPU clock speed in a real-time system.

The peripheral supports both methods above.

The transmit and receive dynamic data-flow interrupts, SSPTXINTR and SSPRXINTR, are separated from the status interrupts so that data can be read or written in response to the FIFO trigger levels.


### <del>DMA interface
</del>
<del>The PrimeCell SSP provides an interface to connect to the DMA controller. The PrimeCell SSP DMA control register, SSPDMACR controls the DMA operation of the PrimeCell SSP.
</del>

**<del>Receive</del>** 

* <del>The DMA interface includes the following signals for receive:
</del>
*	<del>SSPRXDMASREQ
</del>  
  *	<del>Single-character DMA transfer request asserted by the SSP. This signal is asserted when the receive FIFO contains at least one character.
</del>
*	<del>SSPRXDMABREQ
</del>  
  *	<del>Burst DMA transfer request, asserted by the SSP. This signal is asserted when the receive FIFO contains four or more characters.
</del>
*	<del>SSPRXDMACLR</del>
  *	<del>DMA request clear asserted by the DMA controller to clear the receive request signals. If DMA burst transfer is requested, the clear signal is asserted during the transfer of the last data in the burst.</del>

**<del>Transmit</del>** 

* <del>The DMA interface includes the following signals for transmit:
</del>
*	<del>SSPTXDMASREQ
</del>  
  *	<del>Single-character DMA transfer request asserted by the SSP. This signal is asserted when there is at least one empty location in the transmit FIFO.</del>
*	<del>SSPTXDMABREQ</del> 
  *	<del>Burst DMA transfer request asserted by the SSP. This signal is asserted when the transmit FIFO contains four characters or fewer.</del>
*	<del>SSPTXDMACLR
</del>  
  *	<del>DMA request clear asserted by the DMA controller to clear the transmit request signals. If a DMA burst</del> <del>transfer is requested, the clear signal is asserted during the transfer of the last data in the burst.</del>

<del>The burst transfer and single transfer request signals are not mutually exclusive. They can both be asserted at the same time. For example, when there is more data than the watermark level of four in the receive FIFO, the burst transfer request and the single transfer request are asserted.
When the amount of data left in the receive FIFO is less than the watermark level, the single request only is asserted. This is useful for situations when the number of characters left to be received in the stream is less than a burst.</del>

<del>For example, if 19 characters must be received, the DMA controller then transfers four bursts of four characters and three single transfers to complete the stream.
</del><del>The PrimeCell SSP does not assert the burst request for the remaining three characters.
</del>
<del>Each request signal remains asserted until the relevant DMA clear signal is asserted. After the request clear signal is de-asserted, a request signal can become active again depending on the conditions that previous sections describe. All request signals are de-asserted if the PrimeCell SSP is disabled or the DMA enable signal is cleared.</del>


<del>The below Table shows the trigger points for DMABREQ of both the transmit and receive FIFOs.
</del>

<table>
  <tr>
    <th colspan="3">Burst length</th>
  </tr>
  <tr>
    <td>watermark level</td>
    <td>Transmit; (number of empty locations)</td>
    <td>Receive; (number of filled locations)</td>
  </tr>
  <tr>
    <td>1/2</td>
    <td>4</td>
    <td>4</td>
  </tr>
</table>

<del>The below Figure shows the timing diagram for both a single transfer request and a burst transfer request with the appropriate DMA clear signal. The signals are all synchronous to PCLK.</del>![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_dma_wave.jpg "Figure 2 DMA transfer waveforms")

### Interface reset

The PrimeCell SSP is reset by the global reset signal PRESETn and a block-specific reset signal nSSPRST. An external reset controller must use PRESETn to assert nSSPRST asynchronously and negate it synchronously to SSPCLK. PRESETn must be asserted LOW for a period long enough to reset the slowest block in the on-chip system, and then taken HIGH again. The PrimeCell SSP requires PRESETn to be asserted LOW for at least one period of PCLK.

### Configuring the SSP

The Following reset, the PrimeCell SSP logic is disabled and must be configured when in this state.

It is necessary to program control registers SSPCR0 and SSPCR1 to configure the peripheral as a master or slave operating under one of the following protocols:

* Motorola SPI
* Texas Instruments SSI
* National Semiconductor.


The bit rate derived from the external SSPCLK requires the programming of the clock prescale register SSPCPSR.

###Enable PrimeCell SSP operation

You can either prime the transmit FIFO, by writing up to eight 16-bit values when the PrimeCell SSP is disabled, or permit the transmit FIFO service request to interrupt the CPU. Once enabled, transmission or reception of data begins on the transmit, SSPTXD, and receive, SSPRXD, pins.

### Clock ratios

There is a constraint on the ratio of the frequencies of PCLK to SSPCLK. The frequency of SSPCLK must be less or equal to that of PCLK. This ensures that control signals from the SSPCLK domain to the PCLK domain are guaranteed to get synchronized before one frame duration:  

*FSSPCLK < = FPCLK*

In the slave mode of operation, the SSPCLKIN signal from the external master is double-synchronized and then delayed to detect an edge. It takes three SSPCLKs to detect an edge on SSPCLKIN. SSPTXD has less setup time to the falling edge of SSPCLKIN on which the master is sampling the line.

The setup and hold times on SSPRXD, with reference to SSPCLKIN, must be more conservative to ensure that it is at the right value when the actual sampling occurs within the SSPMS. To ensure correct device operation, SSPCLK must be at least 12 times faster than the maximum expected frequency of SSPCLKIN.
The frequency selected for SSPCLK must accommodate the desired range of bit clock rates.
The ratio of minimum SSPCLK frequency to SSPCLKOUT maximum frequency in the case of the slave mode is 12, and for the master mode, it is two.

To generate a maximum bit rate of 1.8432Mbps in the master mode, the frequency of SSPCLK must be at least 3.6864MHz. With an SSPCLK frequency of 3.6864MHz, the SSPCPSR register must be programmed with a value of 2, and the SCR[7:0] field in the SSPCR0 register must be programmed with a value of 0.

To work with a maximum bit rate of 1.8432Mbps in the slave mode, the frequency of SSPCLK must be at least 22.12MHz. With an SSPCLK frequency of 22.12MHz, the SSPCPSR register can be programmed with a value of 12 and the SCR[7:0] field in the SSPCR0 register can be programmed with a value of 0. Similarly, the ratio of SSPCLK maximum frequency to SSPCLKOUT minimum frequency is 254 x 256. 

The minimum frequency of SSPCLK is calculated by the following equations, both of which must be satisfied:  

*FSSPCLK(min) = > 2 x FSSPCLKOUT(max), for master mode*  
*FSSPCLK(min) = > 12 x FSSPCLKIN(max), for slave mode*

The maximum frequency of SSPCLK is calculated by the following equations, both of which must be satisfied:  

*FSSPCLK(max) < = 254 x 256 x FSSPCLKOUT(min), for master mode*  
*FSSPCLK(max) < = 254 x 256 x FSSPCLKIN(min), for slave mode*

### Programming the SSPCR0 Control Register

The SSPCR0 register is used to:

* program the serial clock rate
* select one of the three protocols
* select the data word size, where applicable.

The Serial Clock Rate (SCR) value in conjunction with the SSPCPSR clock prescale divisor value, CPSDVSR, is used to derive the PrimeCell SSP transmit and receive bit rate from the external SSPCLK.

The frame format is programmed through the FRF bits and the data word size through the DSS bits.

Bit phase and polarity applicable to Motorola SPI format only are programmed through the SPH and SPO bits.


### Programming the SSPCR1 Control Register

The SSPCR1 register is used to:

* select master or slave mode
* enable a loop back test feature
* enable the PrimeCell SSP peripheral.

To configure the PrimeCell SSP as a master, clear the SSPCR1 register master or slave selection bit, MS, to 0. This is the default value on reset.

Setting the SSPCR1 register MS bit to 1 configures the PrimeCell SSP as a slave. When
configured as a slave, enabling or disabling of the PrimeCell SSP SSPTXD signal is provided through the SSPCR1 slave mode SSPTXD output disable bit, SOD. You can use this in some multi-slave environments where masters might parallel broadcast.

Set the Synchronous Serial Port Enable (SSE) bit to 1 to enable the operation of the PrimeCell SSP.


#### Bit rate generation

The serial bit rate is derived by dividing down the input clock SSPCLK. The clock is first divided by an even prescale value CPSDVSR in the range of 2-254, and is programmed in SSPCPSR. The clock is divided again by a value in the range of 1-256, that is 1 + SCR, where SCR is the value programmed in SSPCR0.

The following equation defines the frequency of the output signal bit clock, SSPCLKOUT:


<img src="http://latex.codecogs.com/gif.latex?F_SSPCLKOUT=F_SSPCLK/(CPSDVR×(1&plus;SCR))" title="F_SSPCLKOUT=F_SSPCLK/(CPSDVR×(1+SCR))" />  

For example, if SSPCLK is 3.6864MHz, and CPSDVSR = 2, then SSPCLKOUT has a
frequency range of 7.2kHz-1.8432MHz.

### Frame format

Each data frame is between 4-16 bits long depending on the size of data programmed and is transmitted starting with the MSB. Users can select the following basic frame types:

* Texas Instruments synchronous serial
* Motorola SPI
* National Semiconductor Microwire.

For all formats, the serial clock SSPCLKOUT is held inactive while the PrimeCell SSP is idle and transitions at the programmed frequency only during active transmission or reception of data. The idle state of SSPCLKOUT is utilized to provide a receive timeout indication that occurs when the receive FIFO still contains data after a timeout period.

For Motorola SPI and National Semiconductor Microwire frame formats, the serial frame SSPFSSOUT pin is active-LOW and is asserted and pulled-down during the entire transmission of the frame.

For Texas Instruments synchronous serial frame format, the SSPFSSOUT pin is pulsed for one serial clock period starting at its rising edge prior to the transmission of each frame. For this frame format, both the PrimeCell SSP and the off-chip slave device drive their output data on the rising edge of SSPCLKOUT and latch data from the other device on the falling edge.

Unlike the full-duplex transmission of the other two frame formats, the National Semiconductor Microwire format uses a special master-slave messaging technique which operates at half-duplex. In this mode, an 8-bit control message is transmitted to the off-chip slave when a frame begins. During this transmit, the SSP receives no incoming data. After the message has been sent, the off-chip slave decodes it and responds with the requested data after waiting one serial clock after the last bit of the 8-bit control message has been sent. The returned data can be 4-16 bits in length making the total frame length in the range of 13-25 bits.


### Texas Instruments synchronous serial frame format

The below Figure shows the Texas Instruments synchronous serial frame format for a single
transmitted frame.


![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_ti_single.jpg "Figure 3 Texas Instruments synchronous serial frame format, single transfer")

In this mode, SSPCLKOUT and SSPFSSOUT are forced LOW and the transmit data line SSPTXD is tristated whenever the PrimeCell SSP is idle. When the bottom entry of the transmit FIFO contains data, SSPFSSOUT is pulsed HIGH for one SSPCLKOUT period. The value to be transmitted is also transferred from the transmit FIFO to the serial shift register of the transmit logic. On the next rising edge of SSPCLKOUT, the MSB of the 4-bit to 16-bit data frame is shifted out on the SSPTXD pin. In a similar way, the MSB of the received data is shifted onto the SSPRXD pin by the off-chip serial slave device.

Both the PrimeCell SSP and the off-chip serial slave device then clock each data bit into their serial shifter on the falling edge of each SSPCLKOUT. The received data is transferred from the serial shifter to the receive FIFO on the first rising edge of PCLK after the LSB has been latched.

The below Figure shows the Texas Instruments synchronous serial frame format when back-to-back frames are transmitted.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_ti_continuous.jpg "Figure 4 Texas Instruments synchronous serial frame format, continuous transfer")

### Motorola SPI frame format

The Motorola SPI interface is a four-wire interface where the SSPFSSOUT signal behaves as a slave select. The main feature of the Motorola SPI format is that you can program the inactive state and phase of the SSPCLKOUT signal using the SPO and SPH bits of the SSPSCR0 control register.

#### SPO, clock polarity
When the SPO clock polarity control bit is LOW, it produces a steady state LOW value on the SSPCLKOUT pin. If the SPO clock polarity control bit is HIGH, a steady state HIGH value is placed on the SSPCLKOUT pin when data is not being transferred.

#### SPH, clock phase
The SPH control bit selects the clock edge that captures data and enables it to change state. It has the most impact on the first bit transmitted by either permitting or not permitting a clock transition before the first data capture edge.

When the SPH phase control bit is LOW, data is captured on the first clock edge transition.

When the SPH clock phase control bit is HIGH, data is captured on the second clock edge transition.

The below Figures show single and continuous transmission signal sequences for Motorola SPI format with SPO=0, SPH=0.  

The below Figure shows a single transmission signal sequence for Motorola SPI frame format with SPO=0, SPH=0.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_mo_00s.jpg "Figure 5 Motorola SPI frame format, single transfer, with SPO=0 and SPH=0")

The below Figure shows a continuous transmission signal sequence for Motorola SPI frame format with SPO=0, SPH=0.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_mo_00c.jpg "Figure 6 Motorola SPI frame format, continuous transfer, with SPO=0 and SPH=0")

In this configuration, during idle periods:

* the SSPCLKOUT signal is forced LOW
* the SSPFSSOUT signal is forced HIGH
* the transmit data line SSPTXD is arbitrarily forced LOW
* the nSSPOE pad enable signal is forced HIGH, making the transmit pad high impedance
* when the PrimeCell SSP is configured as a master, the nSSPCTLOE line is driven LOW, enabling the SSPCLKOUT pad, active-LOW enable
* when the PrimeCell SSP is configured as a slave, the nSSPCTLOE line is driven HIGH, disabling the SSPCLKOUT pad, active-LOW enable.

If the PrimeCell SSP is enabled and there is valid data within the transmit FIFO, the start of transmission is signified by the SSPFSSOUT master signal being driven LOW. This causes the slave data to be enabled onto the SSPRXD input line of the master. The nSSPOE line is driven LOW, enabling the master SSPTXD output pad.

One half SSPCLKOUT period later, valid master data is transferred to the SSPTXD pin. Now that both the master and slave data have been set, the SSPCLKOUT master clock pin goes HIGH after one additional half SSPCLKOUT period.

The data is now captured on the rising and propagated on the falling edges of the SSPCLKOUT signal.

In the case of a single word transmission after all bits of the data word have been transferred, the SSPFSSOUT line is returned to its idle HIGH state one SSPCLKOUT period after the last bit has been captured.

However, in the case of continuous back-to-back transmissions, the SSPFSSOUT signal must be pulsed HIGH between each data word transfer. This is because the slave select pin freezes the data in its serial peripheral register and does not permit it to be altered if the SPH bit is logic zero. Therefore, the master device must raise the SSPFSSIN pin of the slave device between each data transfer to enable the serial peripheral data write. On completion of the continuous transfer, the SSPFSSOUT pin is returned to its idle state one SSPCLKOUT period after the last bit has been captured.

The below Figure shows the transfer signal sequence for Motorola SPI format with SPO=0, SPH=1, and it covers both single and continuous transfers.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_mo_01.jpg "Figure 7 Motorola SPI frame format, single and continuous transfers, with SPO=0 and SPH=1")

In this configuration, during idle periods:

* the SSPCLKOUT signal is forced LOW
* The SSPFSSOUT signal is forced HIGH
* the transmit data line SSPTXD is arbitrarily forced LOW
* the nSSPOE pad enable signal is forced HIGH, making the transmit pad high impedance
* when the PrimeCell SSP is configured as a master, the nSSPCTLOE line is driven LOW, enabling the SSPCLKOUT pad, active-LOW enable
* when the PrimeCell SSP is configured as a slave, the nSSPCTLOE line is driven HIGH, disabling the SSPCLKOUT pad, active-LOW enable.

If the PrimeCell SSP is enabled and there is valid data within the transmit FIFO, the start of transmission is signified by the SSPFSSOUT master signal being driven LOW. The nSSPOE line is driven LOW, enabling the master SSPTXD output pad. After an additional one half SSPCLKOUT period, both master and slave valid data is enabled onto their respective transmission lines. At the same time, the SSPCLKOUT is enabled with a rising edge transition.

Data is then captured on the falling edges and propagated on the rising edges of the
SSPCLKOUT signal.

In the case of a single word transfer after all bits have been transferred, the SSPFSSOUT line is returned to its idle HIGH state one SSPCLKOUT period after the last bit has been captured.

For continuous back-to-back transfers, the SSPFSSOUT pin is held LOW between successive data words and termination is the same as that of the single word transfer.


The below Figure shows a single transmission signal sequence for Motorola SPI format with SPO=1, SPH=0.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_mo_10s.jpg "Figure 8 Motorola SPI frame format, single transfer, with SPO=1 and SPH=0")

The below Figure shows a continuous transmission signal sequence for Motorola SPI format with SPO=1, SPH=0. In Figure 9, Q is an undefined signal..

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_mo_10c.jpg "Figure 9 Motorola SPI frame format, continuous transfer, with SPO=1 and SPH=0")

In this configuration, during idle periods:

* the SSPCLKOUT signal is forced HIGH
* the SSPFSSOUT signal is forced HIGH
* the transmit data line SSPTXD is arbitrarily forced LOW
* the nSSPOE pad enable signal is forced HIGH, making the transmit pad high impedance
* when the PrimeCell SSP is configured as a master, the nSSPCTLOE line is driven LOW, enabling the SSPCLKOUT pad, active-LOW enable
* when the PrimeCell SSP is configured as a slave, the nSSPCTLOE line is driven HIGH, disabling the SSPCLKOUT pad, active-LOW enable.

If the PrimeCell SSP is enabled and there is valid data within the transmit FIFO, the start of transmission is signified by the SSPFSSOUT master signal being driven LOW, and this causes slave data to be immediately transferred onto the SSPRXD line of the master. The nSSPOE line is driven LOW, enabling the master SSPTXD output pad.

One half period later, valid master data is transferred to the SSPTXD line. Now that both the master and slave data have been set, the SSPCLKOUT master clock pin becomes LOW after one additional half SSPCLKOUT period. This means that data is captured on the falling edges and be propagated on the rising edges of the SSPCLKOUT signal.

In the case of a single word transmission after all bits of the data word are transferred, the SSPFSSOUT line is returned to its idle HIGH state one SSPCLKOUT period after the last bit has been captured.

However, in the case of continuous back-to-back transmissions, the SSPFSSOUT signal must be pulsed HIGH between each data word transfer. This is because the slave select pin freezes the data in its serial peripheral register and does not permit it to be altered if the SPH bit is logic zero. Therefore, the master device must raise the SSPFSSIN pin of the slave device between each data transfer to enable the serial peripheral data write. On completion of the continuous transfer, the SSPFSSOUT pin is returned to its idle state one SSPCLKOUT period after the last bit has been captured.

The below Figure shows the transfer signal sequence for Motorola SPI format with SPO=1, SPH=1, and it covers both single and continuous transfers. In Figure 10, Q is an undefined signal.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_mo_11.jpg "Figure 10 Motorola SPI frame format, single and continuous transfers, with SPO=1 and SPH=1")

In this configuration, during idle periods:

* the SSPCLKOUT signal is forced HIGH
* the SSPFSSOUT signal is forced HIGH
* the transmit data line SSPTXD is arbitrarily forced LOW
* the nSSPOE pad enable signal is forced HIGH, making the transmit pad high impedance
* when the PrimeCell SSP is configured as a master, the nSSPCTLOE line is driven LOW, enabling the SSPCLKOUT pad, active-LOW enable
* when the PrimeCell SSP is configured as a slave, the nSSPCTLOE line is driven HIGH,
disabling the SSPCLKOUT pad, active-LOW enable.

If the PrimeCell SSP is enabled and there is valid data within the transmit FIFO, the start of transmission is signified by the SSPFSSOUT master signal being driven LOW. The nSSPOE line is driven LOW, enabling the master SSPTXD output pad. After an additional one half SSPCLKOUT period, both master and slave data are enabled onto their respective transmission lines. At the same time, the SSPCLKOUT is enabled with a falling edge transition. Data is then captured on the rising edges and propagated on the falling edges of the SSPCLKOUT signal.

After all bits have been transferred in the case of a single word transmission, the SSPFSSOUT line is returned to its idle HIGH state one SSPCLKOUT period after the last bit has been captured.

For continuous back-to-back transmissions, the SSPFSSOUT pin remains in its active-LOW state, until the final bit of the last word has been captured, and then returns to its idle state as the previous section describes.

For continuous back-to-back transfers, the SSPFSSOUT pin is held LOW between successive data words and termination is the same as that of the single word transfer.

### National Semiconductor Microwire frame format

the below Figure shows the National Semiconductor Microwire frame format for a single frame.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_mw_single.jpg "Figure 11 National Semiconductor Microwire frame format, single transfer")

Microwire format is very similar to the SPI format except that transmission is half-duplex instead of full-duplex using a master-slave message passing technique. Each serial transmission begins with an 8-bit control word that is transmitted from the PrimeCell SSP to the off-chip slave device. During this transmission, the PrimeCell SSP receives no incoming data. After the message has been sent, the off-chip slave decodes it and responds with the required data after waiting one serial clock after the last bit of the 8-bit control message has been sent. The returned data is 4 to 16 bits in length, making the total frame length in the range of 13-25 bits.

In this configuration, during idle periods:

* SSPCLKOUT is forced LOW
* SSPFSSOUT is forced HIGH
* the transmit data line, SSPTXD, is arbitrarily forced LOW
* the nSSPOE pad enable signal is forced HIGH, making the transmit pad high impedance.

A transmission is triggered by writing a control byte to the transmit FIFO. The falling edge of SSPFSSOUT causes the value contained in the bottom entry of the transmit FIFO to be transferred to the serial shift register of the transmit logic and the MSB of the 8-bit control frame to be shifted out onto the SSPTXD pin. SSPFSSOUT remains LOW for the duration of the frame transmission. The SSPRXD pin remains tristated during this transmission.

The off-chip serial slave device latches each control bit into its serial shifter on the rising edge of each SSPCLKOUT. After the last bit is latched by the slave device, the control byte is decoded during a one clock wait-state and the slave responds by transmitting data back to the PrimeCell SSP. Each bit is driven onto the SSPRXD line on the falling edge of SSPCLKOUT. The PrimeCell SSP in turn latches each bit on the rising edge of SSPCLKOUT. At the end of the frame for single transfers, the SSPFSSOUT signal is pulled HIGH one clock period after the last bit has been latched in the receive serial shifter, which causes the data to be transferred to the receive FIFO.

The off-chip slave device can tristate the receive line either on the falling edge of SSPCLKOUT after the LSB has been latched by the receive shifter or when the SSPFSSOUT pin goes HIGH.

For continuous transfers, data transmission begins and ends in the same manner as a single transfer. However, the SSPFSSOUT line is continuously asserted, held LOW, and transmission of data occurs back-to-back. The control byte of the next frame follows directly after the LSB of the received data from the current frame. Each of the received values is transferred from the receive shifter on the falling edge SSPCLKOUT, after the LSB of the frame has been latched into the PrimeCell SSP.

The below Figure shows the National Semiconductor Microwire frame format when back-to-back frames are transmitted.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_mw_continuous.jpg "Figure 12 National Semiconductor Microwire frame format, continuous transfer")

### Master and Slave configurations

The below Figure shows how a PrimeCell SSP (PL022) configured as master, interfaces to a Motorola SPI slave. The SPI Slave Select (SS) signal is permanently tied LOW and configures it as a slave. Similar to the above operation, the master can broadcast to the slave through the master PrimeCell SSP SSPTXD line. In response, the slave drives its SPI MISO port onto the SSPRXD line of the master.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_master_slave.jpg "Figure 13 PrimeCell SSP master coupled to an SPI slave")

The below Figure shows a Motorola SPI configured as a master and interfaced to an instance of a PrimeCell SSP (PL022) configured as a slave. In this case, the slave Select Signal (SS) is permanently tied HIGH to configure it as a master. The master can broadcast to the slave through the master SPI MOSI line. In response, the slave drives its nSSPOE signal LOW. 
This enables its SSPTXD data onto the MISO line of the master.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_slave_master.jpg "Figure 14 SPI master coupled to a PrimeCell SSP slave")

### SSP Flow chart

The below Figure shows how to setting TI or Microwire mode.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_flow_chart1.jpg "Figure 15 how to setting TI or Microwire mode flow chart")

The below Figure shows how to set SPI mode.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:briefspec:ssp_flow_chart2.jpg "Figure 16 how to setting SPI mode flow chart")

------------------------------

## Peripheral_Examples
- [SSP Loopback example](SSP-Loopback-example.md)
- [SSP SD Card LED example](http://wizwiki.net/wiki/doku.php?id=products:w7500:peripherals:ssp:sd_card_led)

