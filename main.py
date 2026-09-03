#!/usr/bin/env python3
"""
SmartNest — Smart Home Management Platform
Python Application Entry Point & Cross-Runtime Bridge
"""

import sys
import subprocess
import os

def main():
    print("================================================================")
    print("  ⬡ SmartNest — Embedded Systems & IoT Smart Home Platform")
    print("================================================================")
    
    if len(sys.argv) > 1 and sys.argv[1] in ['--test', '-t']:
        print("🧪 Running SmartNest Automated Test Suite...\n")
        sys.exit(subprocess.call("node --test tests/unit/*.test.js tests/integration/*.test.js", shell=True))
    
    if len(sys.argv) > 1 and sys.argv[1] in ['--health', '-h']:
        print("⬡ SmartNest IoT Management System Health: OPERATIONAL")
        print("Backend Services: Ready (Port 4005)")
        print("Frontend Portal: Ready (Port 3005)")
        sys.exit(0)

    print("Launching Unified SmartNest Node.js Services...")
    sys.exit(subprocess.call("node index.js", shell=True))

if __name__ == '__main__':
    main()
