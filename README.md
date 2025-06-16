

## 성능 개선 보고서

|          before          |           after        |
|------------------|-----------------|
|<img width="440" alt="image" src="https://github.com/user-attachments/assets/d8f349a8-b42a-4afc-a4b1-602b5bc2111f" />|<img width="431" alt="image" src="https://github.com/user-attachments/assets/77709069-2495-4500-a3b9-56f3129ceac2" />|

### 이미지 처리하기
- 이미지 형식 변환: jpg, png → webp ➡ **LCP 5.0s 감소**
- 바로 로드하지 않아도 되는 이미지에 `loading="lazy"` 속성 부여하기
- 반응형 이미지 개선하기  ➡ **LCP 6.0s 감소**
  - img 태그 대신 picture/source 태그 활용하기
    - `picture`: 화면 크기와 브라우저 지원에 따라 다른 이미지를 로딩
    - `source`: 어떤 조건(media/type)에 어떤 이미지를 써야 할지" 브라우저에게 선택지를 제공
    - `img`: 항상 최종적으로 렌더링되는 태그
    - source 중 하나가 선택되면, 그 이미지가 img에 대체되어 표시됨
- ➡ **Performance + 20%**

```diff

-      <img class="desktop" src="images/Hero_Desktop.webp" alt="VR Headsets" />
-      <img class="mobile" src="images/Hero_Mobile.webp" alt="VR Headsets" />
-      <img class="tablet" src="images/Hero_Tablet.webp" alt="VR Headsets" />
+      <picture>
+        <source
+          srcset="/images/Hero_Desktop.webp"
+          media="(min-width: 960px)"
+          type="image/webp"
+        />
+        <source
+          srcset="/images/Hero_Tablet.webp"
+          media="(min-width: 576px)"
+          type="image/webp"
+        />
+        <img
+          src="/images/Hero_Mobile.webp"
+          alt="Hero Image"
+          fetchpriority="high"
+          decoding="async"
+          loading="eager"
+        />
+      </picture>
```

### 스크립트 개선하기
- 스크립트를 body 하단으로 이동
- `defer`
   - 스크립트를 백그라운드에서 다운로드, DOMContentLoaded 직전에 실행
   - HTML 파싱과 병렬로 진행되며 실행 순서 보장!!
- `async`
   - 스크립트를 다운로드하면서 동시에 HTML도 파싱
   - 다운로드가 끝나는 즉시 실행
```js
    <script type="text/javascript" src="/js/main.js" defer></script>Add commentMore actions
    <script type="text/javascript" src="/js/products.js" async></script>
```

- 아래 이벤트를 DOM 트리만 완성된 시점에 실행되도록 개선
```diff
+  document.addEventListener("DOMContentLoaded", () => {
         cookieconsent.run({
              // 내용
       });
+.  });
```

### Accessibility 개선하기
- 색상 대비 변경하기
- 태그 순서 지키기
- ➡ **Accessibility + 9%**


### SEO 개선하기
- meta 정보 추가하기
- alt 속성 추가하기
- ➡ **SEO + 9%**

### [issues 탭 공유](https://github.com/kanghyew0n/front_5th_chapter4-2_basic/issues)
|             커밋별 성능 비교하기          |
|--------------------------------|
|<img width="975" alt="image" src="https://github.com/user-attachments/assets/be8dbe7f-cbd2-4277-b79b-eae12b3ba8dc" />|
