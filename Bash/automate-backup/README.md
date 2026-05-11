# automate-backup
automate linux backup using rsync and systemd and healthcheck.io for monitoring

## Installation
```bash 
git clone git@github.com:Alaa-Atwa/automate-backup.git 
cd automate-backup 
sudo cp auto-backup /usr/local/bin 
```

## Test and Run manually
```bash 
auto-backup
```

## Adding systemd service
```bash 
vi /etc/systemd/system/backup.service 

# add the service and save the file 

[Unit] 
Description=Run a daily backup 
After=network-online.target 
wants=network-online.target 

[Service]
Type=oneshot 
ExecStart=/usr/local/bin/auto-backup

[Install]
WantedBy=timers.target 

```
## adding systemd timer for the service 
```bash
vi /etc/systemd/system/backup.timer 

# add the timer and save the file 
[Unit]
Description=Daily rsync backup 

[Timer]
onCalendar=00:00
Persistent=true

[Install]
WantedBy=timers.target 

```

## reload the systemd service and check its status 
```bash 
sudo systemctl daemon-reload 
sudo systemctl status backup.timer 
```

## enable the service 
```bash 
sudo systemctl enable --now backup.timer 
# the timer will tirgger the service when the specified time comes, which will do the backup
```

## monitor the service
- to make sure the service not failing silently we can use something like [healthcheck.io](https://healthcheck.io)
- start a new project on this website and hook this service to got notified when it doesn't run correctly.
- it will create a link for you, add it to the bottom of your script (/usr/local/bin/auto-backup)

```bash
sudo vi /usr/local/bin/auto-backup 
# add at the bottom:
if [[ $? -eq 0 ]]; then
  curl -fsS <healthcheck.io_link>
fi
```