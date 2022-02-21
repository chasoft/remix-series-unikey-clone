export const md_2018_06_06 = `---
title: blog1-blog-1blog
---
##Tự động chạy UniKey với quyền admin

Các bước để chạy UniKey với quyền administrator bằng cách dùng Task Scheduler

1. Tắt “Khởi động cùng Windows” trong UniKey. Sau đó tắt UniKey.
2. Chạy Task Scheduler (bấm nút Start, sau đó gõ Task Scheduler).
3. Tạo basic task với các lựa chọn sau:
	* Trigger: When I log on
	* Action: Start a program. Sau đó chọn đường dẫn đến UniKeyNT.exe
	* Finish. Sau đó chọn tiếp Properties của Task để thêm các thông số sau:
	* General: Run with highest privileges.
	* Triggers - Edit: Chọn “Delay task for: 30 seconds” (Nếu không chọn phần này thì UniKey sẽ được khởi động mà không có icon ở góc).
	* Condition: Nếu là máy laptop thì BỎ lựa chọn “Start the task only if the computer is on AC power”.

Logout, sau đó login, UniKey sẽ được chạy với quyền admin 30 giây sau khi login.
`