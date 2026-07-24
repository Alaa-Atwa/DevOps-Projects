# multi-server provisioner 

- provision many servers at once.
- Read a list of servers IPs from a file, SSH into each, install packages, creates users, sets up firewall rules, and report status.

---

## workflow:
1. You call it like: ./provision.sh servers.txt — a text file of IP addresses is the input
2. It reads the file line by line, getting one IP per iteration
3. For each IP, it SSHes in and runs a block of commands remotely
4. It installs required packages, creates a user, configures the firewall
5. It runs all servers in parallel (background jobs) so 10 servers take the same time as 1
6. It waits for all jobs to finish, then reports which succeeded and which failed
Everything is logged with the server IP so you can trace what happened where
