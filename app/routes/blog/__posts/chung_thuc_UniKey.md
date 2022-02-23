---
title: Chứng thực UniKey
description: "Kể từ phiên bản 4.3 RC1, các bản release của UniKey được gắn chứng thực chữ ký số."
slug: "chung-thuc-UniKey"
date: "30 May 2018"
---
## Chứng thực UniKey

Kể từ phiên bản 4.3 RC1, các bản release của UniKey được gắn chứng thực chữ ký số.

Chữ ký số sẽ giúp:

* UniKey không bị hệ thống kiểm tra Windows Defender SmartScreen cảnh báo nhầm là phần mềm độc hại.
* Bạn luôn có thể kiểm tra để có thể chắc chắn chương trình đúng là do tác giả Phạm Kim Long cung cấp và không bị thay đổi.

## Cảnh báo SmartScreen của Windows Defender

Mặc dù UniKey đã được gắn chữ ký số, mỗi khi một phiên bản UniKey mới được công bố chưa lâu, bạn vẫn có thể gặp cảnh báo SmartScreen khi chạy UniKey như sau:

![smartscreen](/img/certificate/smartscreen.png)

Khi gặp màn hình trên, bạn bấm vào nút “More Info” như hình trên. Khi đó SmartScreen sẽ hiện đầy đủ thông tin xuất xứ của UniKey như sau:

![smartscreen-ok](/img/certificate/smartscreen-ok.png)

Nếu bạn thấy dòng chữ **Publisher: PHAM KIM LONG**, tức là bạn đang dùng bản UniKey sạch, xuất phát từ tác giả.

Nếu bạn thấy dòng chữ **Publisher: Unknown publisher** như dưới đây thì đừng sử dụng, vì đó rất có thể là một phiên bản đã bị cài mã độc, hoặc là một chương trình không rõ nguồn gốc.

![smartscreen-unknown](/img/certificate/smartscreen-unknown.png)

### Lưu ý

Với mỗi bản UniKey có gắn chứng thực chữ ký số, sau khi có số lượt download đủ lớn, Windows sẽ ghi nhận và “nhớ” phiên bản sạch của UniKey và sẽ không hiện cảnh báo của SmartScreen như ở trên nữa (với điều kiện bản download là nguyên bản, không bị ai khác thay đổi). Nếu không gặp cảnh báo, các bạn có thể yên tâm sử dụng UniKey.

## Cách kiểm tra chứng thực chữ ký số của UniKey

Để kiểm chứng UniKey xuất phát từ tác giả, không bị sửa đổi, các bạn làm như sau:

* Trong Windows Explorer, bấm chuột phải vào file UniKeyNT.exe, chọn Properties, sau đó chọn tab Digital Signatures.

	![properties1](/img/certificate/properties-1.png)

* Bấm vào nút Details:

	![properties2](/img/certificate/properties-2.png)

* Bấm vào nút View Certificate:

	![properties3](/img/certificate/properties-3.png)
