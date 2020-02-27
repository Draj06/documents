

## Check the board

**If you've just purchased W6100-EVB, let the following points for the
checking board check & operation at the first time.**  
Connect your board to a PC using USB and connect LAN cable. **USB is
Micro B USB type.** W6100-EVB doesn't care uses Micro USB B type or
DC-JACK(DC-5V) 
**Don't forget: It must be supplied DC-5V**  
The W6100-EVB can use be Micro USB B type or DC-JACK to the power
supply. Users can the choice that one of both. 

 **LAN Connector**  
When users did connect to LAN cable, users should be check
RJ-45(ethernet connector) LEDs. There are two indicator LEDs in RJ-45.
Orange LED indicates 100M ACT. Green LED indicates LINK.

-----

## Hello World

This section is descriptive to W6100-EVB operation. let the following
points for the board operation. W6100-EVB supported to eclipse loopback
example code. Make new W6100-EVB Project is clicking on this link. If
you want to know "How to download the program" click on this link.

#### 1\. Serial Debug message print out

The board outputs serial "debug" message via Micro B USB port (virtual
COM Port). This will give you info about network configuration and
loopback socket.  
Check the virtual COM port number in your system's properties.  
Please connect with any terminal to that serial port with
**115200.8.N.1**.

![](/products/w6100/w6100_evb/debug_msg.jpg)

#### 4\. Loopback test

 If you need detailed figures, please refer to the below link.  
![](/products/w5500/w5500_evb/icons/link.png) 

[TCP and UDP loopback test](/osh/cookie/loopback_test#TCP%20and%20UDP%20loopback%20test)


The loopback example runs with a TCP session and a UDP session.

First, Board and your PC should have the network config with the same
network range.  
If you want to modify board-side, edit the following code in
\[src\>\>LB\_main.c\] with the same range which your PC has. If you want
to modify your PC-side, refer to [IP configuration](IP_configuration.md).

``` cpp
wiz_NetInfo gWIZNETINFO = { .mac = {0x00,0x08,0xdc,0x57,0x57,0x20},
                            .ip = {192,168,11,16},
                            .sn = {255, 255, 255, 0},
                            .gw = {192, 168, 11, 1},
                            .dns = {8, 8, 8, 8},
                            .dhcp = NETINFO_STATIC,
                            .lla = {0xfe,0x80, 0x00,0x00,
                                 0x00,0x00, 0x00,0x00,
                                 0x02,0x08, 0xdc,0xff,
                                 0xfe,0x57, 0x57,0x61},
                            .gua={0x20,0x01,0x02,0xb8,
                                 0x00,0x10,0x00,0x01,
                                 0x02,0x08,0xdc,0xff,
                                 0xfe,0x57,0x57,0x61},
                            .sn6={0xff,0xff,0xff,0xff,
                                 0xff,0xff,0xff,0xff,
                                 0x00,0x00,0x00, 0x00,
                                 0x00,0x00,0x00,0x00},
                            .gw6={0xfe, 0x80, 0x00,0x00,
                                  0x00,0x00,0x00,0x00,
                                  0x02,0x00, 0x87,0xff,
                                  0xfe,0x08, 0x4c,0x81},
                            };

```

##### TCP

  - Port 5000 : IPv6
  - Port 5001 : IPv4

<!-- end list -->

1.  Connect to Board 
      - Using \[\[osh
