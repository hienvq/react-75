Lifecycle Component Mounting > Updating > Unmounting

componentDidMount = goi sau khi component xuat hien lan dau componentDidUpdate = goi sau moi lan component update componentWillUnmount = goi trc khi component bien mat => chi co trong class component = stateful component Trc phien ban 16.8, khi chua co hook, functional component chi dung de hien thi UI, ko co state => ten goi khac: stateless component

Ke tu phien ban 16.8, Hook ra doi Hook giup functional component co the su dung lifecycle tuong tu class component Hook chi co the su dung trong functional component!!!

1. State Hook Array destructoring: const array = [1,2]; const [a,b] = array; const [state, setState] = React.useState(initValue)

State hook cho phep quan ly state trong functional component. useState tra ve 1 mang gom 2 phần tử pt1: Giá trị của state pt2: Phương thức cập nhật lại state & re-render component

cách 1: setState(newValue) cách 2: setState((currentState) => newState)

2. Effect Hook React.useEffect(() => { // do sth }, [dependencies])

dependencies co 3 kieu truyen

- Ko truyen => Sẽ gọi function lần đầu tiên component xuất hiện và mỗi lần component re-render => componentDidUpdate + componentDidMount
- Truyen mang rong [] => sẽ gọi function lần đầu tiên component xuất hiện và có thể gọi trước khi component biến mất -> componentDidMount + componentWillUnmount
- Truyen mang co phan tu [a,b,c] => sẽ gọi function mỗi lần có phần tử thay đổi giá trị + lần đầu tiên component xuất hiện

3. Context Hook const context = React.useContext(ContextName)

- Giúp lấy giá trị trong context

4. Custom Hook Do Developer tự viết

5. Memo Hook const cachedValue = React.useMemo(calculateValue, dependencies) Cache Giá trị

6. Callback Hook const cachedFn = useCallback(fn, dependencies) Cache Function

7. Reducer Hook const [state, dispatch] = useReducer(reducer, initialArg, init?)

- Dùng quản lý state phức tạp
- reducer: function nhận vào action + state hiện tại => trả về state mới
- dispatch: là phương thức để gửi action

Bài tập: Dùng useReducer để thêm và xoá phần tử trong 1 list ul>li

reducer là 1 function nhận vào 1 action và giá trị của state hiện tại sau đó trả ra giá trị state mới

DEPLOY:

Prepare

- Push Source code to github
- Create AWS EC2 Instance and Open connection
- Install nvm, git, nginx, pm2, json-server

* https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html
* sudo yum install git

* sudo yum install nginx

* npm install pm2@latest -g

* npm install json-server -g

- start nginx: sudo service nginx start
- open url to check nginx
- Pull code from github

Deploy Backend

- cd to folder source code
- npm install
- pm2 start "npm run server" --name json-server
- Open Edit nginx config file: sudo nano /etc/nginx/nginx.conf
- add: location /api/ { proxy_pass http://localhost:3004/; }
- restart nginx: sudo service nginx restart
- verify api

Deploy Frontend

- update endpoint api, commit code to github
- connect to ec2, pull code from github
- Pull code from github
- cd to folder source code
- npm install
- npm run build
- Open Edit nginx config file: sudo nano /etc/nginx/nginx.conf
- update: root /home/ec2-user/react-75/build; index index.html index.htm;
- add: location / { try_files $uri $uri/ /index.html; }
- grant permission to access folder code: sudo chmod 755 /home/ec2-user
- restart nginx: sudo service nginx restart
- verify frontend

ÔN TẬP

1. Typescript: là 1 ngôn ngữ phát triển từ javascript Ưu điểm so với JS:

- chặt chẽ về kiểu dữ liệu
- có thể viết theo kiểu hướng đối tượng (OOP)

2. var, let, const

- Giống nhau: Đều để khai báo biến
- var, let có thể cập nhật giá trị của biến, const thì không
- var có global scope, let với const có block scope (trong cặp dấu "{}")
- var có hoisting, let và const thì ko có

3. Biến Tham trị và tham chiếu

- tham trị: biến lưu giá trị (VD: const a = 5;)
- tham chiếu: biến lưu địa chỉ đến vùng nhớ chứa giá trị (VD: const a = {x: 1};)

4. lập trình bất đồng bộ

- Javascript là ngôn ngữ xử lý đơn luồng, bất đồng bộ
- Các kỹ thuật xử lý bất đồng bộ:

* callback: hàm truyền vào 1 hàm khác và được gọi lại bên trong hàm khác đó
* promise: Là 1 lời hứa nếu thành công thì gọi callback resolve, nếu thất bại thì gọi callback reject promiseFn() .then(() => return promiseFn2()) .then(() => return promiseFn3()) .then() .catch(() => return promiseFn4()) .then() .catch()
* async/await

5. React

- Tạo 1 ứng dụng React: npx create-react-app project-name (CRA), CDN
- JSX: javascript & XML

6. class & functional component

- class: khai báo từ class; functional: khai báo từ functional
- class có thể sử dụng đc những phương thức trong lifecycle: componentDidMount,componentDidUpdate, componentWillUnmount,...
- functional có thể sử dụng hooks

7. state vs props

- state: là biến lưu giá trị bên trong component và thường sử dụng để hiển thị lên UI
- props: là thuộc tính truyền từ component cha vào component con
- component có thể update state nhưng ko thể update props của nó
- giống nhau: khi state hoặc props thay đổi thì component đều re-render

8. Chia sẻ dữ liệu giữa các component

- props, callback
- context, redux

9. so sánh context và redux giống nhau: đều có thể quản lý global state khác nhau:

- context ko cần cài thêm, redux là thư viện và phải cài thêm
- redux có thể sử dụng cả cho react, vue, angular; context chỉ sử dụng đc cho react
- syntax khác nhau: context thì lưu state và phương thức, redux thì sẽ tạo store, reducer
- redux có middleware
- Nên sử dụng redux cho những ứng dụng lớn, quản lý nhiều global state

10. router (react-router-dom)

- đảm bảo tính đồng bộ giữa url và giao diện

11. SPA vs MPA (single page app vs multiple page app)

- React là SPA
- single page app là những ứng dụng phát triển giao diện dựa trên 1 page duy nhất, trên giao diện chứa nhiều component

12. lifecycle
Mounting - Updating - Unmounting

componentDidMount: gọi sau khi component xuất hiện lần đầu tiên trên giao diện,
componentDidUpdate: gọi sau mỗi lần component re-render và cả lần đầu tiên, 
componentWillUnmount: gọi trước khi component biến mất khỏi giao diện

13. các cách call API
- XHR
- fetch
- axios
- react-query
...

14. Hooks
Chỉ sử dụng trong func component
- useState, useEffect, useSelector, useContext, useMemo, useCallback, useReducer
useState: Khởi tạo state và phương thức cập nhật State
const [state, setState] = useState(0)

useEffect(callbackFn, dependency?)
Luôn chạy callbackFn lần đầu tiên component render. Từ lần thứ 2 sẽ phụ thuộc vào dependency

dependency = undefined: Gọi callbackFn sau mỗi lần component re-render và cả lần đầu tiên
dependency = []: Gọi callbackFn lần đầu tiên component render lên giao diện
dependency = [a,b]: Gọi lần đầu tiên và sau mỗi lần a hoặc b thay đổi giá trị

Cleanup function: 
useEffect(() => {
  // LOGIC
  return () => {

  }
}, [a,b])
- ko chạy lần đầu tiên khi component render
- những lần re-render sau đều chạy trc phần LOGIC
- chạy trc khi component bị unmount = componentWillMount

So sánh useMemo và useCallback
Giống nhau: đều để lưu trữ tạm thời dữ liệu
Khác nhau: useMemo lưu trữ dữ liệu giá trị, useCallback lưu trữ liệu là function

React.memo ko phải là hook mà là HOC - higher order component: dùng để cache component

15. redux
- Luồng hđ của redux

16. localstorage vs session storage vs cookies (đều để lưu trữ data trên trình duyệt)
local storage: ko mất đi khi mà đóng tab, trình duyệt có thể crud local storage
session storage: sẽ bị mất khi đóng tab, trình duyệt có thể crud
cookies: ko bị mất khi đóng tab nhưng có thời gian expire, sẽ gửi kèm theo các request đến server, cookies thường do server set giá trị

Vite
NextJS
scss/sass
