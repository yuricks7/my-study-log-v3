 RERUN  src/__test__/App.test.tsx x3 

stdout | src/__test__/App.test.tsx:46:3 > 学習記録アプリのテスト > 学習記録が登録できること
DialogForm mount - mode: create isOpen: true
DialogForm register keys: []
DialogForm initial selectedRecord id: null
DialogForm errors (initial): {}
FormField render - name: title error: undefined
FormField render - name: time error: undefined
DialogForm mount - mode: create isOpen: true
DialogForm register keys: []
DialogForm initial selectedRecord id: null
DialogForm errors (initial): {}
FormField render - name: title error: undefined
FormField render - name: time error: undefined

Not implemented: Window's confirm() method
stdout | src/__test__/App.test.tsx:46:3 > 学習記録アプリのテスト > 学習記録が登録できること
onSubmit called { title: 'React 勉強', time: 3 }

stdout | src/__test__/App.test.tsx:93:3 > 学習記録アプリのテスト > 学習内容がないときに登録するとエラーがでる
DialogForm mount - mode: create isOpen: true
DialogForm register keys: []
DialogForm initial selectedRecord id: null
DialogForm errors (initial): {}
FormField render - name: title error: undefined
FormField render - name: time error: undefined
DialogForm mount - mode: create isOpen: true
DialogForm register keys: []
DialogForm initial selectedRecord id: null
DialogForm errors (initial): {}
FormField render - name: title error: undefined
FormField render - name: time error: undefined

stdout | src/__test__/App.test.tsx:93:3 > 学習記録アプリのテスト > 学習内容がないときに登録するとエラーがでる
<body
  data-inert=""
  data-scroll-lock=""
  style="overflow: hidden; padding-right: 1024px; pointer-events: none;"
>
  <div>
    <div
      class="chakra-stack css-8g8ihq"
    >
      <div
        aria-hidden="true"
        class="css-d82rsv"
        data-aria-hidden=""
      >
        <h1
          class="chakra-heading css-14xok8l"
          data-testid="title"
        >
          学習記録アプリ
        </h1>
      </div>
      <div
        aria-hidden="true"
        class="css-1bvc4cc"
        data-aria-hidden=""
      >
        <button
          class="chakra-button css-1bcmnci"
          type="button"
        >
          新規登録
        </button>
      </div>
      <table
        aria-hidden="true"
        class="chakra-table__root css-1js591h"
        data-aria-hidden=""
        data-testid="table"
      >
        <thead
          class="chakra-table__header css-16u7ocv"
        >
          <tr
            class="chakra-table__row css-11ot24d"
          >
            <th
              class="chakra-table__columnHeader css-1sq5grx"
            >
              学習内容
            </th>
            <th
              class="chakra-table__columnHeader css-1sq5grx"
            >
              学習時間
            </th>
            <th
              class="chakra-table__columnHeader css-1sq5grx"
            />
            <th
              class="chakra-table__columnHeader css-1sq5grx"
            />
          </tr>
        </thead>
        <tbody
          class="chakra-table__body css-go1ol1"
        >
          <tr
            class="chakra-table__row css-11ot24d"
          >
            <td
              class="chakra-table__cell css-1n30cde"
            >
              勉強の記録10
            </td>
            <td
              class="chakra-table__cell css-1n30cde"
            >
              10時間
            </td>
            <td
              class="chakra-table__cell css-1n30cde"
            >
              <button
                aria-label="edit"
                class="chakra-button css-pe2ilu"
                type="button"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"
                  />
                </svg>
              </button>
            </td>
            <td
              class="chakra-table__cell css-1n30cde"
            >
              <button
                aria-label="delete"
                class="chakra-button css-pe2ilu"
                type="button"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        aria-labelledby="dialog:_r_1_:title"
        aria-modal="true"
        class="chakra-dialog__content css-1ld0nhp"
        data-part="content"
        data-scope="dialog"
        data-state="open"
        dir="ltr"
        id="dialog:_r_1_:content"
        role="dialog"
        style="--layer-index: 0; --nested-layer-count: 0; pointer-events: auto;"
        tabindex="-1"
      >
        <div
          class="chakra-dialog__header css-10gvpny"
        >
          <h2
            class="chakra-dialog__title css-1ka0vat"
            data-part="title"
            data-scope="dialog"
            dir="ltr"
            id="dialog:_r_1_:title"
          >
            新規登録
          </h2>
        </div>
        <div
          class="chakra-dialog__body css-1eziyey"
        >
          <form>
            <div
              style="margin-bottom: 16px;"
            >
              <label
                for="title"
                style="display: block; margin-bottom: 6px;"
              >
                学習内容
              </label>
              <input
                data-testid="input-text"
                id="title"
                name="title"
                style="width: 100%; padding: 8px; border: 1px rgb(203, 213, 224); border-radius: 4px;"
                type="text"
              />
            </div>
            <div
              style="margin-bottom: 16px;"
            >
              <label
                for="time"
                style="display: block; margin-bottom: 6px;"
              >
                学習時間
              </label>
              <input
                data-testid="input-number"
                id="time"
                name="time"
                style="width: 100%; padding: 8px; border: 1px rgb(203, 213, 224); border-radius: 4px;"
                type="number"
              />
            </div>
            <div
              class="chakra-dialog__footer css-2hlbnb"
            >
              <button
                class="chakra-button css-1bcmnci"
                type="submit"
              >
                登録
              </button>
            </div>
          </form>
        </div>
        <button
          class="chakra-dialog__closeTrigger css-12lyfty"
          data-part="close-trigger"
          data-scope="dialog"
          dir="ltr"
          id="dialog:_r_1_:close"
          type="button"
        />
      </div>
    </div>
  </div>
</body>
dialog count: 1

stdout | src/__test__/App.test.tsx:93:3 > 学習記録アプリのテスト > 学習内容がないときに登録するとエラーがでる
onInvalid called {
  title: {
    type: 'required',
    message: '学習内容は必須です',
    ref: HTMLInputElement {
      '__reactFiber$hct91cz3nqj': [FiberNode],
      '__reactProps$hct91cz3nqj': [Object],
      '__reactEvents$hct91cz3nqj': [Set],
      value: [Getter/Setter],
      _valueTracker: [Object],
      setSelectionRange: [Function],
      selectionStart: [Getter/Setter],
      selectionEnd: [Getter/Setter],
      select: [Function],
      setRangeText: [Function],
      Symbol(SameObject caches): [Object: null prototype],
      Symbol(Last check for pointer-events): [Object],
      Symbol(Displayed selection in UI): [Object],
      Symbol(Node prepared with document state workarounds): Symbol(Node prepared with document state workarounds),
      Symbol(Initial value to compare on blur): undefined,
      Symbol(Displayed value in UI): '',
      Symbol(Track programmatic changes for React workaround): undefined
    }
  },
  time: {
    type: 'min',
    message: '1時間以上を入力してください',
    ref: HTMLInputElement {
      '__reactFiber$hct91cz3nqj': [FiberNode],
      '__reactProps$hct91cz3nqj': [Object],
      '__reactEvents$hct91cz3nqj': [Set],
      value: [Getter/Setter],
      _valueTracker: [Object],
      setSelectionRange: [Function],
      selectionStart: [Getter/Setter],
      selectionEnd: [Getter/Setter],
      select: [Function],
      setRangeText: [Function],
      Symbol(SameObject caches): [Object: null prototype],
      Symbol(Last check for pointer-events): [Object],
      Symbol(Displayed selection in UI): [Object],
      Symbol(Node prepared with document state workarounds): Symbol(Node prepared with document state workarounds)
    }
  }
}

stdout | src/__test__/App.test.tsx:93:3 > 学習記録アプリのテスト > 学習内容がないときに登録するとエラーがでる
DialogForm mount - mode: create isOpen: true
DialogForm register keys: []
DialogForm initial selectedRecord id: null
DialogForm errors (initial): {
  title: {
    type: 'required',
    message: '学習内容は必須です',
    ref: HTMLInputElement {
      '__reactFiber$hct91cz3nqj': [FiberNode],
      '__reactProps$hct91cz3nqj': [Object],
      '__reactEvents$hct91cz3nqj': [Set],
      value: [Getter/Setter],
      _valueTracker: [Object],
      setSelectionRange: [Function],
      selectionStart: [Getter/Setter],
      selectionEnd: [Getter/Setter],
      select: [Function],
      setRangeText: [Function],
      Symbol(SameObject caches): [Object: null prototype],
      Symbol(Last check for pointer-events): [Object],
      Symbol(Displayed selection in UI): [Object],
      Symbol(Node prepared with document state workarounds): Symbol(Node prepared with document state workarounds),
      Symbol(Initial value to compare on blur): undefined,
      Symbol(Displayed value in UI): '',
      Symbol(Track programmatic changes for React workaround): undefined
    }
  },
  time: {
    type: 'min',
    message: '1時間以上を入力してください',
    ref: HTMLInputElement {
      '__reactFiber$hct91cz3nqj': [FiberNode],
      '__reactProps$hct91cz3nqj': [Object],
      '__reactEvents$hct91cz3nqj': [Set],
      value: [Getter/Setter],
      _valueTracker: [Object],
      setSelectionRange: [Function],
      selectionStart: [Getter/Setter],
      selectionEnd: [Getter/Setter],
      select: [Function],
      setRangeText: [Function],
      Symbol(SameObject caches): [Object: null prototype],
      Symbol(Last check for pointer-events): [Object],
      Symbol(Displayed selection in UI): [Object],
      Symbol(Node prepared with document state workarounds): Symbol(Node prepared with document state workarounds)
    }
  }
}
FormField render - name: title error: 学習内容は必須です
FormField render - name: time error: 1時間以上を入力してください

stdout | src/__test__/App.test.tsx:93:3 > 学習記録アプリのテスト > 学習内容がないときに登録するとエラーがでる
DialogForm mount - mode: create isOpen: true
DialogForm register keys: []
DialogForm initial selectedRecord id: null
DialogForm errors (initial): {
  time: {
    type: 'min',
    message: '1時間以上を入力してください',
    ref: HTMLInputElement {
      '__reactFiber$hct91cz3nqj': [FiberNode],
      '__reactProps$hct91cz3nqj': [Object],
      '__reactEvents$hct91cz3nqj': [Set],
      value: [Getter/Setter],
      _valueTracker: [Object],
      setSelectionRange: [Function],
      selectionStart: [Getter/Setter],
      selectionEnd: [Getter/Setter],
      select: [Function],
      setRangeText: [Function],
      Symbol(SameObject caches): [Object: null prototype],
      Symbol(Last check for pointer-events): [Object],
      Symbol(Displayed selection in UI): [Object],
      Symbol(Node prepared with document state workarounds): Symbol(Node prepared with document state workarounds)
    }
  }
}
FormField render - name: title error: undefined
FormField render - name: time error: 1時間以上を入力してください

stdout | src/__test__/App.test.tsx:137:3 > 学習記録アプリのテスト > 学習時間がないときに登録するとエラーがでる
DialogForm mount - mode: create isOpen: true
DialogForm register keys: []
DialogForm initial selectedRecord id: null
DialogForm errors (initial): {}
FormField render - name: title error: undefined
FormField render - name: time error: undefined
DialogForm mount - mode: create isOpen: true
DialogForm register keys: []
DialogForm initial selectedRecord id: null
DialogForm errors (initial): {}
FormField render - name: title error: undefined
FormField render - name: time error: undefined

stdout | src/__test__/App.test.tsx:137:3 > 学習記録アプリのテスト > 学習時間がないときに登録するとエラーがでる
onInvalid called {
  time: {
    type: 'required',
    message: '学習時間は必須です',
    ref: HTMLInputElement {
      '__reactFiber$hct91cz3nqj': [FiberNode],
      '__reactProps$hct91cz3nqj': [Object],
      '__reactEvents$hct91cz3nqj': [Set],
      value: [Getter/Setter],
      _valueTracker: [Object],
      setSelectionRange: [Function],
      selectionStart: [Getter/Setter],
      selectionEnd: [Getter/Setter],
      select: [Function],
      setRangeText: [Function],
      Symbol(SameObject caches): [Object: null prototype],
      Symbol(Last check for pointer-events): [Object],
      Symbol(Displayed selection in UI): [Object],
      Symbol(Node prepared with document state workarounds): Symbol(Node prepared with document state workarounds),
      Symbol(Initial value to compare on blur): undefined,
      Symbol(Displayed value in UI): '',
      Symbol(Track programmatic changes for React workaround): undefined
    }
  }
}

stdout | src/__test__/App.test.tsx:137:3 > 学習記録アプリのテスト > 学習時間がないときに登録するとエラーがでる
DialogForm mount - mode: create isOpen: true
DialogForm register keys: []
DialogForm initial selectedRecord id: null
DialogForm errors (initial): {
  time: {
    type: 'required',
    message: '学習時間は必須です',
    ref: HTMLInputElement {
      '__reactFiber$hct91cz3nqj': [FiberNode],
      '__reactProps$hct91cz3nqj': [Object],
      '__reactEvents$hct91cz3nqj': [Set],
      value: [Getter/Setter],
      _valueTracker: [Object],
      setSelectionRange: [Function],
      selectionStart: [Getter/Setter],
      selectionEnd: [Getter/Setter],
      select: [Function],
      setRangeText: [Function],
      Symbol(SameObject caches): [Object: null prototype],
      Symbol(Last check for pointer-events): [Object],
      Symbol(Displayed selection in UI): [Object],
      Symbol(Node prepared with document state workarounds): Symbol(Node prepared with document state workarounds),
      Symbol(Initial value to compare on blur): undefined,
      Symbol(Displayed value in UI): '',
      Symbol(Track programmatic changes for React workaround): undefined
    }
  }
}
FormField render - name: title error: undefined
FormField render - name: time error: 学習時間は必須です

 ❯ src/__test__/App.test.tsx (3 tests | 1 failed) 1946ms
   ❯ 学習記録アプリのテスト (3)
     ✓ 学習記録が登録できること  477ms
     × 学習内容がないときに登録するとエラーがでる 1172ms
     ✓ 学習時間がないときに登録するとエラーがでる 295ms

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/__test__/App.test.tsx:93:3 > 学習記録アプリのテスト > 学習内容がないときに登録するとエラーがでる
TestingLibraryElementError: Unable to find an element with the text: 学習内容は必須です. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body
  data-inert=""
  data-scroll-lock=""
  style="overflow: hidden; padding-right: 1024px; pointer-events: none;"
>
  <div>
    <div
      class="chakra-stack css-8g8ihq"
    >
      <div
        aria-hidden="true"
        class="css-d82rsv"
        data-aria-hidden=""
      >
        <h1
          class="chakra-heading css-14xok8l"
          data-testid="title"
        >
          学習記録アプリ
        </h1>
      </div>
      <div
        aria-hidden="true"
        class="css-1bvc4cc"
        data-aria-hidden=""
      >
        <button
          class="chakra-button css-1bcmnci"
          type="button"
        >
          新規登録
        </button>
      </div>
      <table
        aria-hidden="true"
        class="chakra-table__root css-1js591h"
        data-aria-hidden=""
        data-testid="table"
      >
        <thead
          class="chakra-table__header css-16u7ocv"
        >
          <tr
            class="chakra-table__row css-11ot24d"
          >
            <th
              class="chakra-table__columnHeader css-1sq5grx"
            >
              学習内容
            </th>
            <th
              class="chakra-table__columnHeader css-1sq5grx"
            >
              学習時間
            </th>
            <th
              class="chakra-table__columnHeader css-1sq5grx"
            />
            <th
              class="chakra-table__columnHeader css-1sq5grx"
            />
          </tr>
        </thead>
        <tbody
          class="chakra-table__body css-go1ol1"
        >
          <tr
            class="chakra-table__row css-11ot24d"
          >
            <td
              class="chakra-table__cell css-1n30cde"
            >
              勉強の記録10
            </td>
            <td
              class="chakra-table__cell css-1n30cde"
            >
              10時間
            </td>
            <td
              class="chakra-table__cell css-1n30cde"
            >
              <button
                aria-label="edit"
                class="chakra-button css-pe2ilu"
                type="button"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"
                  />
                </svg>
              </button>
            </td>
            <td
              class="chakra-table__cell css-1n30cde"
            >
              <button
                aria-label="delete"
                class="chakra-button css-pe2ilu"
                type="button"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        aria-labelledby="dialog:_r_1_:title"
        aria-modal="true"
        class="chakra-dialog__content css-1ld0nhp"
        data-part="content"
        data-scope="dialog"
        data-state="open"
        dir="ltr"
        id="dialog:_r_1_:content"
        role="dialog"
        style="--layer-index: 0; --nested-layer-count: 0; pointer-events: auto;"
        tabindex="-1"
      >
        <div
          class="chakra-dialog__header css-10gvpny"
        >
          <h2
            class="chakra-dialog__title css-1ka0vat"
            data-part="title"
            data-scope="dialog"
            dir="ltr"
            id="dialog:_r_1_:title"
          >
            新規登録
          </h2>
        </div>
        <div
          class="chakra-dialog__body css-1eziyey"
        >
          <form>
            <div
              style="margin-bottom: 16px;"
            >
              <label
                for="title"
                style="display: block; margin-bottom: 6px;"
              >
                学習内容
              </label>
              <input
                data-testid="input-text"
                id="title"
                name="title"
                style="width: 100%; padding: 8px; border: 1px rgb(203, 213, 224); border-radius: 4px;"
                type="text"
              />
            </div>
            <div
              style="margin-bottom: 16px;"
            >
              <label
                for="time"
                style="display: block; margin-bottom: 6px;"
              >
                学習時間
              </label>
              <input
                data-testid="input-number"
                id="time"
                name="time"
                style="width: 100%; padding: 8px; border: 1px rgb(229, 62, 62); border-radius: 4px;"
                type="number"
              />
              <div
                role="alert"
                style="color: red;"
              >
                1時間以上を入力してください
              </div>
            </div>
            <div
              class="chakra-dialog__footer css-2hlbnb"
            >
              <button
                class="chakra-button css-1bcmnci"
                type="submit"
              >
                登録
              </button>
            </div>
          </form>
        </div>
        <button
          class="chakra-dialog__closeTrigger css-12lyfty"
          data-part="close-trigger"
          data-scope="dialog"
          dir="ltr"
          id="dialog:_r_1_:close"
          type="button"
        />
      </div>
    </div>
  </div>
</body>

Ignored nodes: comments, script, style
<html
  class="light"
  style="color-scheme: light; --scrollbar-width: 1024px;"
>
  <head />
  <body
    data-inert=""
    data-scroll-lock=""
    style="overflow: hidden; padding-right: 1024px; pointer-events: none;"
  >
    <div>
      <div
        class="chakra-stack css-8g8ihq"
      >
        <div
          aria-hidden="true"
          class="css-d82rsv"
          data-aria-hidden=""
        >
          <h1
            class="chakra-heading css-14xok8l"
            data-testid="title"
          >
            学習記録アプリ
          </h1>
        </div>
        <div
          aria-hidden="true"
          class="css-1bvc4cc"
          data-aria-hidden=""
        >
          <button
            class="chakra-button css-1bcmnci"
            type="button"
          >
            新規登録
          </button>
        </div>
        <table
          aria-hidden="true"
          class="chakra-table__root css-1js591h"
          data-aria-hidden=""
          data-testid="table"
        >
          <thead
            class="chakra-table__header css-16u7ocv"
          >
            <tr
              class="chakra-table__row css-11ot24d"
            >
              <th
                class="chakra-table__columnHeader css-1sq5grx"
              >
                学習内容
              </th>
              <th
                class="chakra-table__columnHeader css-1sq5grx"
              >
                学習時間
              </th>
              <th
                class="chakra-table__columnHeader css-1sq5grx"
              />
              <th
                class="chakra-table__columnHeader css-1sq5grx"
              />
            </tr>
          </thead>
          <tbody
            class="chakra-table__body css-go1ol1"
          >
            <tr
              class="chakra-table__row css-11ot24d"
            >
              <td
                class="chakra-table__cell css-1n30cde"
              >
                勉強の記録10
              </td>
              <td
                class="chakra-table__cell css-1n30cde"
              >
                10時間
              </td>
              <td
                class="chakra-table__cell css-1n30cde"
              >
                <button
                  aria-label="edit"
                  class="chakra-button css-pe2ilu"
                  type="button"
                >
                  <svg
                    fill="currentColor"
                    height="1em"
                    stroke="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"
                    />
                  </svg>
                </button>
              </td>
              <td
                class="chakra-table__cell css-1n30cde"
              >
                <button
                  aria-label="delete"
                  class="chakra-button css-pe2ilu"
                  type="button"
                >
                  <svg
                    fill="currentColor"
                    height="1em"
                    stroke="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          aria-labelledby="dialog:_r_1_:title"
          aria-modal="true"
          class="chakra-dialog__content css-1ld0nhp"
          data-part="content"
          data-scope="dialog"
          data-state="open"
          dir="ltr"
          id="dialog:_r_1_:content"
          role="dialog"
          style="--layer-index: 0; --nested-layer-count: 0; pointer-events: auto;"
          tabindex="-1"
        >
          <div
            class="chakra-dialog__header css-10gvpny"
          >
           ...
 ❯ Proxy.waitForWrapper node_modules/@testing-library/dom/dist/wait-for.js:163:27
 ❯ src/__test__/App.test.tsx:129:11
    127|     await userEvent.click(submitButton);
    128|
    129|     await waitFor(() => {
       |           ^
    130|       expect(screen.getByText(titleRequiredMsg)).toBeInTheDocument();
    131|     });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed (1)
      Tests  1 failed | 2 passed (3)
   Start at  12:04:16
   Duration  2.91s

 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit
