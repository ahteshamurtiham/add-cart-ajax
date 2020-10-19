{{--  add cart by ajax  --}}
 <script>
    $(document).ready(function(){
        $('.addcart').on('click',function(){
            var id= $(this).data('id');
            if(id){
                $.ajax({
                  url: "{{ url('add/to/cart/') }}/"+id,
                  type: "GET",
                  dataType: "json",
                  success:function(data){

                             const Toast = Swal.mixin({
                             toast: true,
                             position: 'top-end',
                             showConfirmButton: false,
                             timer: 3000,
                             timerProgressBar: true,
                             onOpen: (toast) => {
                             toast.addEventListener('mouseenter', Swal.stopTimer)
                             toast.addEventListener('mouseleave', Swal.resumeTimer)
                             }
                         })
                         if($.isEmptyObject(data.error)){
                             Toast.fire({
                                 icon: 'success',
                                 title: data.success
                             })
                         }else{
                             Toast.fire({
                                 icon: 'error',
                                 title: data.error
                             })
                         }


                  },
                });
            }
            else{
                alert('danger');
            }
        });
    });
 </script>